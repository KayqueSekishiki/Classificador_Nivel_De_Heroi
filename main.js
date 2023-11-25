function heroRank(heroName, heroExp) {
  let name = heroName;
  let exp = heroExp;
  let rank;

  if (exp <= 1000) {
    rank = "Ferro";
  } else if (exp >= 1001 && exp <= 2000) {
    rank = "Bronze";
  } else if (exp >= 2001 && exp <= 6000) {
    rank = "Prata";
  } else if (exp >= 6001 && exp <= 7000) {
    rank = "Ouro";
  } else if (exp >= 7001 && exp <= 8000) {
    rank = "Platina";
  } else if (exp >= 8001 && exp <= 9000) {
    rank = "Ascendente";
  } else if (exp >= 9000 && exp <= 10000) {
    rank = "Imortal";
  } else {
    rank = "Radiante";
  }

  return `O Herói de nome ${name} está no nível ${rank}`;
}

console.log(heroRank("Seki, o Viúvo"));
