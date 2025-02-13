import { CSV } from "https://js.sabae.cc/CSV.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const baseurl = "https://sslab.c.fun.ac.jp/webcard/motomachi/";

const data = JSON.parse(await Deno.readTextFile("data/photos.json"));
await Deno.mkdir("photo", { recursive: true });
let idx = 0;
for (const photo of data.photos) {
  const url = baseurl + encodeURI(photo.file);
  console.log(idx++, "/", data.photos.length, url);
  const bin = new Uint8Array(await (await fetch(url)).arrayBuffer());
  //console.log(bin);
  await Deno.writeFile("photo/" + photo.id + ".jpg", bin);
  await sleep(Math.random() * 3000 + 1000);
  //break;
}
await Deno.writeTextFile("photo.csv", CSV.stringify(data.photos));
