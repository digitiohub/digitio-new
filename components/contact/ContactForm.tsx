"use client";

import { useState } from "react";
import { ArrowUpRight, Clock3 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function ContactForm() {
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        contactNumber: "",
        budgetRange: "",
        workEmail: "",
        projectDescription: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        const serviceId = "service_rxgqmtr";
        const templateId = "template_oksygsc";
        const publicKey = "zuOK8ZiCIIRyP07Cm";

        // Map form data to template parameters
        const templateParams = {
            name: formData.fullName,
            phone: formData.contactNumber,
            email: formData.workEmail,
            reason: `Budget: ${formData.budgetRange || "Not specified"}`,
            message: formData.projectDescription,
        };

        try {
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );
            toast.success("Inquiry sent successfully!");
            setFormData({
                fullName: "",
                contactNumber: "",
                budgetRange: "",
                workEmail: "",
                projectDescription: "",
            });
        } catch (error) {
            console.error("Failed to send email:", error);
            toast.error("Failed to send inquiry. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="rounded-[1.5rem] border border-blue-300/30 bg-linear-to-b from-[#001347] via-[#04297e] to-[#0d5aff] p-5 shadow-[0_35px_90px_rgba(0,68,255,0.25)] md:p-6">
            <h2 className="text-xl font-bold md:text-2xl">
                Tell us about your project
            </h2>
            <p className="mt-2 text-xs text-blue-100/90 md:text-sm">
                The more detail you share, the faster we can align on scope.
            </p>

            <form className="mt-6 space-y-8" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                        Full Name *
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your name"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-xs text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none md:text-sm"
                        />
                    </label>
                    <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                        Contact Number *
                        <input
                            type="tel"
                            name="contactNumber"
                            placeholder="Enter your number"
                            required
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-xs text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none md:text-sm"
                        />
                    </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <label className="block space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                        Budget Range
                        <select
                            name="budgetRange"
                            value={formData.budgetRange}
                            onChange={handleChange}
                            className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-xs text-white focus:border-white focus:outline-none md:text-sm"
                        >
                            <option value="" className="text-slate-900">
                                Select a Budget Range
                            </option>
                            <option value="25k-50k" className="text-slate-900">
                                INR 25,000 - INR 50,000
                            </option>
                            <option value="50k-100k" className="text-slate-900">
                                INR 50,000 - INR 1,00,000
                            </option>
                            <option
                                value="let's-discuss"
                                className="text-slate-900"
                            >
                                Let&apos;s Discuss
                            </option>
                        </select>
                    </label>
                    <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                        Work Email
                        <input
                            type="email"
                            name="workEmail"
                            placeholder="Enter your email"
                            value={formData.workEmail}
                            onChange={handleChange}
                            className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-xs text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none md:text-sm"
                        />
                    </label>
                </div>

                <label className="block space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                    Describe Your Project *
                    <textarea
                        name="projectDescription"
                        rows={3}
                        placeholder="What are you building and when do you plan to launch?"
                        required
                        value={formData.projectDescription}
                        onChange={handleChange}
                        className="w-full resize-none border-0 border-b border-blue-200/50 bg-transparent pb-2 text-xs text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none md:text-sm"
                    />
                </label>

                <div className="rounded-xl border border-blue-200/40 bg-[#00113a]/45 p-3">
                    <div className="flex items-start gap-2.5">
                        <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-blue-200" />
                        <p className="text-xs leading-relaxed text-blue-100/90 md:text-sm">
                            We usually respond within 24 hours, Monday to
                            Saturday, 10:00 AM to 7:00 PM IST.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <button
                        type="submit"
                        disabled={isSending}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-slate-900 transition hover:bg-slate-200 md:text-sm disabled:opacity-50"
                    >
                        {isSending ? "Sending..." : "Send Inquiry"}
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </form>
        </div>
    );
}
