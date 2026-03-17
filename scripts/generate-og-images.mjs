import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import ogPages from "../data/og-pages.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "public", "og");
const logoPath = path.join(rootDir, "public", "logos", "Digi_Logo_Full_Cropped_White.png");

const WIDTH = 1200;
const HEIGHT = 630;
const COLORS = {
  background: "#070a12",
  backgroundAlt: "#0d1321",
  primary: "#3f8cff",
  primaryLight: "#8ec2ff",
  text: "#f5f8ff",
  textMuted: "#a8b3c7",
  textSubtle: "#7b879c",
};

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function wrapText(value, maxLineLength, maxLines) {
  const words = value.trim().split(/\s+/);
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length <= maxLineLength) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    currentLine = word;

    if (lines.length === maxLines - 1) {
      break;
    }
  }

  if (lines.length < maxLines && currentLine) {
    lines.push(currentLine);
  }

  const consumedWords = lines.join(" ").split(/\s+/).filter(Boolean).length;
  const hasOverflow = consumedWords < words.length;

  if (hasOverflow && lines.length > 0) {
    lines[lines.length - 1] = `${lines[lines.length - 1].replace(/[.,;:!?-]*$/, "")}...`;
  }

  return lines.map((line) => escapeXml(line));
}

function getPageLink(route) {
  return route === "/" ? "digitiohub.in" : `digitiohub.in${route}`;
}

function renderBackground() {
  return `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
          <stop stop-color="${COLORS.background}" />
          <stop offset="0.55" stop-color="${COLORS.backgroundAlt}" />
          <stop offset="1" stop-color="#060911" />
        </linearGradient>
        <radialGradient id="glowTop" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1110 120) rotate(180) scale(290 290)">
          <stop stop-color="#3f8cff" stop-opacity="0.14" />
          <stop offset="1" stop-color="#3f8cff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glowBottom" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(96 604) rotate(180) scale(220 220)">
          <stop stop-color="#2f6bff" stop-opacity="0.10" />
          <stop offset="1" stop-color="#2f6bff" stop-opacity="0" />
        </radialGradient>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0V60" fill="none" stroke="rgba(63,140,255,0.07)" stroke-width="1" />
        </pattern>        <pattern id="dotPattern" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.8" fill="rgba(142,194,255,0.22)" />
        </pattern>
        <radialGradient id="dotFade" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(930 230) rotate(30) scale(420 260)">
          <stop stop-color="white" stop-opacity="0.8" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <mask id="dotMask">
          <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dotFade)" />
        </mask>
        <linearGradient id="topLine" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stop-color="transparent" />
          <stop offset="0.5" stop-color="${COLORS.primary}" />
          <stop offset="1" stop-color="transparent" />
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />      <path d="M0 0L260 0L0 322V0Z" fill="rgba(0,0,0,0.24)" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dotPattern)" mask="url(#dotMask)" opacity="0.28" />
      <circle cx="1110" cy="120" r="290" fill="url(#glowTop)" />
      <circle cx="96" cy="604" r="220" fill="url(#glowBottom)" />
      <rect x="0" y="0" width="1200" height="3" fill="url(#topLine)" />
    </svg>
  `;
}

function renderOverlay(page) {
  const isHome = page.slug === "home";
  const subtitle = escapeXml(page.eyebrow.toUpperCase());
  const titleLines = wrapText(page.ogTitle, isHome ? 24 : 22, 2);
  const descriptionLines = wrapText(page.description, 80, 3);
  const pageLink = escapeXml(getPageLink(page.route));

  const titleText = titleLines
    .map((line, index) => `<tspan x="70" dy="${index === 0 ? 0 : 50}">${line}</tspan>`)
    .join("");

  const descriptionText = descriptionLines
    .map((line, index) => `<tspan x="70" dy="${index === 0 ? 0 : 23}">${line}</tspan>`)
    .join("");

  const badgeText = isHome ? "digitiohub.in" : pageLink;
  const topBadge = `
      <rect x="878" y="58" width="252" height="44" rx="22" fill="rgba(63,140,255,0.10)" stroke="rgba(63,140,255,0.32)" />
      <text x="914" y="86" fill="${COLORS.primaryLight}" font-size="16" font-family="Arial, sans-serif" font-weight="500">${badgeText}</text>
    `;

  return `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${topBadge}
      <rect x="70" y="254" width="40" height="3" rx="1.5" fill="${COLORS.primary}" />
      <text x="126" y="268" fill="${COLORS.primary}" font-size="18" font-family="Arial, sans-serif" letter-spacing="4" font-weight="600">${subtitle}</text>
      <text x="70" y="355" fill="${COLORS.text}" font-size="64" font-family="Arial, sans-serif" font-weight="700">${titleText}</text>
      <text x="70" y="434" fill="${COLORS.textMuted}" font-size="18" font-family="Arial, sans-serif">${descriptionText}</text>
      <circle cx="1098" cy="565" r="4" fill="${COLORS.primary}" />
      <circle cx="1114" cy="565" r="4" fill="rgba(63,140,255,0.55)" />
      <circle cx="1130" cy="565" r="4" fill="rgba(63,140,255,0.28)" />
    </svg>
  `;
}

async function generateImage(page, logoBuffer) {
  const background = await sharp(Buffer.from(renderBackground())).png().toBuffer();
  const overlay = await sharp(Buffer.from(renderOverlay(page))).png().toBuffer();
  const logo = await sharp(logoBuffer)
    .resize({ width: page.slug === "home" ? 220 : 180, withoutEnlargement: true })
    .png()
    .toBuffer();

  await sharp(background)
    .composite([
      { input: logo, left: 70, top: 58 },
      { input: overlay, left: 0, top: 0 },
    ])
    .png()
    .toFile(path.join(outputDir, `${page.slug}.png`));
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const logoBuffer = await fs.readFile(logoPath);
  await Promise.all(ogPages.map((page) => generateImage(page, logoBuffer)));
  console.log(`Generated ${ogPages.length} OG image(s) in ${outputDir}`);
}

main().catch((error) => {
  console.error("Failed to generate OG images.");
  console.error(error);
  process.exitCode = 1;
});


