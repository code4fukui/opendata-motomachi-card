import { CSV } from "https://js.sabae.cc/CSV.js";

const cards = JSON.parse(await Deno.readTextFile("data/cards.json"));
const cardsets = JSON.parse(await Deno.readTextFile("data/cardsets.json"));

for (const c of cards.cards) {
  c.cardsets = "";
}

for (const i of cardsets.cardsets) {
  for (const id of i.card_list) {
    const card = cards.cards.find(i => i.id == id);
    if (!card) throw new Error("can't find the card");
    if (card.cardsets) {
      card.cardsets += ";" + i.label;
    } else {
      card.cardsets = i.label;
    }
  }
}
await Deno.writeTextFile("motomachi-card.csv", CSV.stringify(cards.cards));
