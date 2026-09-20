import { chromium } from 'playwright';
import path from 'path';

async function cropSocialQuery() {
  const inputImage = 'file:///Users/supryo/Downloads/ChatGPT%20Image%20Sep%2017,%202026,%2003_51_10%20PM.png';
  const outputDir = '/Users/supryo/Desktop/portfolio/public/projects';

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Total dimensions 1672 x 941
  // We will crop into 3 equal or nicely proportioned horizontal/vertical sections
  // Each card in the portfolio takes col1: [img1, img2], col2: [img3 (hero)]
  // Or 3 vertical splits for the 3 visual panes in the generated image.

  const width = 1672;
  const height = 941;
  const colWidth = Math.floor(width / 3);

  // Left slice (col 1 top / item 1)
  await page.setViewportSize({ width: colWidth, height: height, deviceScaleFactor: 2 });
  await page.setContent(`
    <body style="margin:0;padding:0;overflow:hidden;background:#000;">
      <div style="width:${width}px;height:${height}px;margin-left:0px;">
        <img src="${inputImage}" style="width:${width}px;height:${height}px;display:block;" />
      </div>
    </body>
  `);
  await page.screenshot({ path: path.join(outputDir, 'social-query-1.png'), type: 'png' });
  console.log('Saved social-query-1.png');

  // Middle slice (col 1 bottom / item 2)
  await page.setContent(`
    <body style="margin:0;padding:0;overflow:hidden;background:#000;">
      <div style="width:${width}px;height:${height}px;margin-left:-${colWidth}px;">
        <img src="${inputImage}" style="width:${width}px;height:${height}px;display:block;" />
      </div>
    </body>
  `);
  await page.screenshot({ path: path.join(outputDir, 'social-query-2.png'), type: 'png' });
  console.log('Saved social-query-2.png');

  // Right slice (col 2 hero / item 3)
  await page.setViewportSize({ width: width - (colWidth * 2), height: height, deviceScaleFactor: 2 });
  await page.setContent(`
    <body style="margin:0;padding:0;overflow:hidden;background:#000;">
      <div style="width:${width}px;height:${height}px;margin-left:-${colWidth * 2}px;">
        <img src="${inputImage}" style="width:${width}px;height:${height}px;display:block;" />
      </div>
    </body>
  `);
  await page.screenshot({ path: path.join(outputDir, 'social-query-3.png'), type: 'png' });
  console.log('Saved social-query-3.png');

  await browser.close();
  console.log('Finished cropping SocialQuery images.');
}

cropSocialQuery().catch(console.error);
