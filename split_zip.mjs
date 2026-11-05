import fs from "fs";
import path from "path";

const zipFile = "C:/Users/HP/Downloads/updated office site/Website Builder host 3/inzovate_deploy.zip";
const buffer = fs.readFileSync(zipFile);
const chunkSize = 15 * 1024 * 1024; // 15MB
let part = 0;
for (let i = 0; i < buffer.length; i += chunkSize) {
  const slice = buffer.subarray(i, i + chunkSize);
  const partPath = `C:/Users/HP/Downloads/updated office site/Website Builder host 3/deploy_part_${part}`;
  fs.writeFileSync(partPath, slice);
  console.log(`Wrote ${partPath} (${slice.length} bytes)`);
  part++;
}
console.log(`Total parts: ${part}`);
