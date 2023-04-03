function generateName() {
  const firstName = ["Anarkyss", "Veth'va", "Mayator", "Quaez", "Daisan", "Bekliel", "Orvak", "Narlek", "Monsatos", "Vivithrax", "Drevakh", "Kyzarkh", "Thresyn", "Shylas", "Lythric", "Kylos", "Threskil", "Skythe", "Akkhar", "Kharsac", "Nyktos", "Grevyth", "Thraed", "Sykil", "Khaeyl", "Madrax", "Akhirion", "Vypus", "Ethriliac", "Kharaes", "Eldoriac", "Vrekkus", "Xurul", "Arlex", "Melikka", "Grendette", "Vaivel", "Bithrandrel", "Ingenue", "Demadyne", "Laelanyel", "Excrucia", "Nathra", "Vrexith", "Thyndrella", "Selithrian", "Xela", "Peiythia", "Uless", "Skyshrin", "Anielyn", "Vyrenik", "Khatryx", "Nyssa", "Phyrix", "Meilyx", "Kherissa", "Tryxin", "Aniellah", "Veshtari", "Morghynn", "Thrixxesh", "Thessa", "Xindrell", "Kladys", "Shemriel", "Lyxanna", "Nimhre", "Vylekh"];
  
  const lastName = ["Sar'sel", "Vorpex", "Kreen", "the Bloodbreather", "Masestros", "Gaarsus", "Ethrek", "Ghorghast", "Ignyss", "Mohrkhar", "Thresk", "Scaur", "the Pale", "Khadylus", "Phrel", "Vulkyriax", "Nul", "the Flenser", "Poisonblade", "Barbtongue", "Xesh", "the Ravening", "Draeven", "of the KABAL/CULT/COVEN", "Vhrex", "Kaghmyr", "Thrail", "Flickerblade", "Xosh", "the Bleak", "Neverbreath", "Skahyl", "Verkosian", "Ulthurian", "Menesh", "the Cruel", "La'ilenz", "Wysp", "Soriel", "Oblique", "Nervose", "Mourn", "Vivicon", "Viseryx", "Berrebaal", "Vulptuse", "Ehlynna", "Khaur", "Hexehss", "the Crimson", "Thrix", "Khoryssa", "Vexx", "Khyrgg", "Nichtren", "the Scarlet", "the Scarred", "Veluxis", "the Huntress", "Beastbane", "the Magnificent", "Trehll", "Xyriphraxis", "Masdruvael", "Khrone", "the Untouched", "Bloodslykk", "Kharavyxis", "Ynthrekh", "Dyvahur", "Krael", "the Bloodsister"];

  const randomFirstNameIndex = Math.floor(Math.random() * firstName.length);
  const randomLastNameIndex = Math.floor(Math.random() * lastName.length);

  const randomFirstName = firstName[randomFirstNameIndex];
  const randomLastName = lastName[randomLastNameIndex];

  const nameOutput = document.getElementById("nameOutput");
  nameOutput.innerHTML = "The flesh vats have birthed: " + randomFirstName + " " + randomLastName;
}
