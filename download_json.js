const jsons = [
  "https://sslab.c.fun.ac.jp/webcard/motomachi/data/cards.json",
  "https://sslab.c.fun.ac.jp/webcard/motomachi/data/photos.json",
  "https://sslab.c.fun.ac.jp/webcard/motomachi/data/cardsets.json",
];
// https://sslab.c.fun.ac.jp/webcard/motomachi/photo/01%E5%85%83%E7%94%BA%E6%96%BD%E8%A8%AD/01_%E5%85%83%E7%94%BA%E9%85%8D%E6%B0%B4%E6%B1%A0%E4%BA%8B%E5%8B%99%E6%89%80.jpg

await Deno.mkdir("data", { recursive: true });
for (const url of jsons) {
  const data = JSON.parse(await (await fetch(url)).text());
  console.log(data, data.length);
  const fn = url.substring(url.lastIndexOf("/") + 1);
  await Deno.writeTextFile("data/" + fn, JSON.stringify(data, null, 2));
}
