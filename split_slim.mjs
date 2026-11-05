import fs from "fs";

const zipFile = "C:/Users/HP/Downloads/updated office site/Website Builder host 3/test_slim.zip";
const buffer = fs.readFileSync(zipFile);
const chunkSize = 4 * 1024 * 1024; // 4MB
let part = 0;
for (let i = 0; i < buffer.length; i += chunkSize) {
  const slice = buffer.subarray(i, i + chunkSize);
  const partPath = `C:/Users/HP/Downloads/updated office site/Website Builder host 3/slim_part_${part}`;
  fs.writeFileSync(partPath, slice);
  console.log(`Wrote ${partPath} (${slice.length} bytes)`);
  part++;
}
console.log(`Total slim parts: ${part}`);
