client.on("ready", async () => {
  setInterval(() => {
  const nitrolar = []
  const nitroata = nitrolar[Math.floor(Math.random()*nitrolar.length)];
  client.channels.get("KANAL ID").send(`Nitro Kodu: https://discord.gift/${nitroata}`)
}, 5000)//milsaniye
})
