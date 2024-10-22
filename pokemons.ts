interface Pokemon {
    nome: string;
    numeroDex: number;
    nivel: number;
    hp: number;
    atk: number;
    def: number;
    atkEsp: number;
    defEsp: number;
    velocidade: number;
}

// Criando a lista de Pokédex
let pokeDex:Pokemon[] = [];

// Array com os dados dos primeiros Pokémon (nome, valores base de HP, Atk, Def, AtkEsp, DefEsp, Velocidade)
const baseStats = [
    // Anteriormente listados
    { nome: 'Bulbasaur', numeroDex: 1, baseHp: 45, baseAtk: 49, baseDef: 49, baseAtkEsp: 65, baseDefEsp: 65, baseVelocidade: 45 },
    { nome: 'Ivysaur', numeroDex: 2, baseHp: 60, baseAtk: 62, baseDef: 63, baseAtkEsp: 80, baseDefEsp: 80, baseVelocidade: 60 },
    { nome: 'Venusaur', numeroDex: 3, baseHp: 80, baseAtk: 82, baseDef: 83, baseAtkEsp: 100, baseDefEsp: 100, baseVelocidade: 80 },
    { nome: 'Charmander', numeroDex: 4, baseHp: 39, baseAtk: 52, baseDef: 43, baseAtkEsp: 60, baseDefEsp: 50, baseVelocidade: 65 },
    { nome: 'Charmeleon', numeroDex: 5, baseHp: 58, baseAtk: 64, baseDef: 58, baseAtkEsp: 80, baseDefEsp: 65, baseVelocidade: 80 },
    { nome: 'Charizard', numeroDex: 6, baseHp: 78, baseAtk: 84, baseDef: 78, baseAtkEsp: 109, baseDefEsp: 85, baseVelocidade: 100 },
    { nome: 'Squirtle', numeroDex: 7, baseHp: 44, baseAtk: 48, baseDef: 65, baseAtkEsp: 50, baseDefEsp: 64, baseVelocidade: 43 },
    { nome: 'Wartortle', numeroDex: 8, baseHp: 59, baseAtk: 63, baseDef: 80, baseAtkEsp: 65, baseDefEsp: 80, baseVelocidade: 58 },
    { nome: 'Blastoise', numeroDex: 9, baseHp: 79, baseAtk: 83, baseDef: 100, baseAtkEsp: 85, baseDefEsp: 105, baseVelocidade: 78 },
    { nome: 'Caterpie', numeroDex: 10, baseHp: 45, baseAtk: 30, baseDef: 35, baseAtkEsp: 20, baseDefEsp: 20, baseVelocidade: 45 },
    { nome: 'Metapod', numeroDex: 11, baseHp: 50, baseAtk: 20, baseDef: 55, baseAtkEsp: 25, baseDefEsp: 25, baseVelocidade: 30 },
    { nome: 'Butterfree', numeroDex: 12, baseHp: 60, baseAtk: 45, baseDef: 50, baseAtkEsp: 90, baseDefEsp: 80, baseVelocidade: 70 },
    { nome: 'Weedle', numeroDex: 13, baseHp: 40, baseAtk: 35, baseDef: 30, baseAtkEsp: 20, baseDefEsp: 20, baseVelocidade: 50 },
    { nome: 'Kakuna', numeroDex: 14, baseHp: 45, baseAtk: 25, baseDef: 50, baseAtkEsp: 25, baseDefEsp: 25, baseVelocidade: 35 },
    { nome: 'Beedrill', numeroDex: 15, baseHp: 65, baseAtk: 90, baseDef: 40, baseAtkEsp: 45, baseDefEsp: 80, baseVelocidade: 75 },
    { nome: 'Pidgey', numeroDex: 16, baseHp: 40, baseAtk: 45, baseDef: 40, baseAtkEsp: 35, baseDefEsp: 35, baseVelocidade: 56 },
    { nome: 'Pidgeotto', numeroDex: 17, baseHp: 63, baseAtk: 60, baseDef: 55, baseAtkEsp: 50, baseDefEsp: 50, baseVelocidade: 71 },
    { nome: 'Pidgeot', numeroDex: 18, baseHp: 83, baseAtk: 80, baseDef: 75, baseAtkEsp: 70, baseDefEsp: 70, baseVelocidade: 101 },
    { nome: 'Rattata', numeroDex: 19, baseHp: 30, baseAtk: 56, baseDef: 35, baseAtkEsp: 25, baseDefEsp: 35, baseVelocidade: 72 },
    { nome: 'Raticate', numeroDex: 20, baseHp: 55, baseAtk: 81, baseDef: 60, baseAtkEsp: 50, baseDefEsp: 70, baseVelocidade: 97 },
    { nome: 'Spearow', numeroDex: 21, baseHp: 40, baseAtk: 60, baseDef: 30, baseAtkEsp: 31, baseDefEsp: 31, baseVelocidade: 70 },
    { nome: 'Fearow', numeroDex: 22, baseHp: 65, baseAtk: 90, baseDef: 65, baseAtkEsp: 61, baseDefEsp: 61, baseVelocidade: 100 },
    { nome: 'Ekans', numeroDex: 23, baseHp: 35, baseAtk: 60, baseDef: 44, baseAtkEsp: 40, baseDefEsp: 54, baseVelocidade: 55 },
    { nome: 'Arbok', numeroDex: 24, baseHp: 60, baseAtk: 85, baseDef: 69, baseAtkEsp: 65, baseDefEsp: 79, baseVelocidade: 80 },
    { nome: 'Pikachu', numeroDex: 25, baseHp: 35, baseAtk: 55, baseDef: 40, baseAtkEsp: 50, baseDefEsp: 50, baseVelocidade: 90 },
    { nome: 'Raichu', numeroDex: 26, baseHp: 60, baseAtk: 90, baseDef: 55, baseAtkEsp: 90, baseDefEsp: 80, baseVelocidade: 110 },
    { nome: 'Sandshrew', numeroDex: 27, baseHp: 50, baseAtk: 75, baseDef: 85, baseAtkEsp: 20, baseDefEsp: 30, baseVelocidade: 40 },
    { nome: 'Sandslash', numeroDex: 28, baseHp: 75, baseAtk: 100, baseDef: 110, baseAtkEsp: 45, baseDefEsp: 55, baseVelocidade: 65 },
    { nome: 'Nidoran♀', numeroDex: 29, baseHp: 55, baseAtk: 47, baseDef: 52, baseAtkEsp: 40, baseDefEsp: 40, baseVelocidade: 41 },
    { nome: 'Nidorina', numeroDex: 30, baseHp: 70, baseAtk: 62, baseDef: 67, baseAtkEsp: 55, baseDefEsp: 55, baseVelocidade: 56 },
    { nome: 'Nidoqueen', numeroDex: 31, baseHp: 90, baseAtk: 92, baseDef: 87, baseAtkEsp: 75, baseDefEsp: 85, baseVelocidade: 76 },
    { nome: 'Nidoran♂', numeroDex: 32, baseHp: 46, baseAtk: 57, baseDef: 40, baseAtkEsp: 40, baseDefEsp: 40, baseVelocidade: 50 },
    { nome: 'Nidorino', numeroDex: 33, baseHp: 61, baseAtk: 72, baseDef: 57, baseAtkEsp: 55, baseDefEsp: 55, baseVelocidade: 65 },
    { nome: 'Nidoking', numeroDex: 34, baseHp: 81, baseAtk: 102, baseDef: 77, baseAtkEsp: 85, baseDefEsp: 75, baseVelocidade: 85 },
    { nome: 'Clefairy', numeroDex: 35, baseHp: 70, baseAtk: 45, baseDef: 48, baseAtkEsp: 60, baseDefEsp: 65, baseVelocidade: 35 },
    { nome: 'Clefable', numeroDex: 36, baseHp: 95, baseAtk: 70, baseDef: 73, baseAtkEsp: 95, baseDefEsp: 90, baseVelocidade: 60 },
    { nome: 'Vulpix', numeroDex: 37, baseHp: 38, baseAtk: 41, baseDef: 40, baseAtkEsp: 50, baseDefEsp: 65, baseVelocidade: 65 },
    { nome: 'Ninetales', numeroDex: 38, baseHp: 73, baseAtk: 76, baseDef: 75, baseAtkEsp: 81, baseDefEsp: 100, baseVelocidade: 100 },
    { nome: 'Jigglypuff', numeroDex: 39, baseHp: 115, baseAtk: 45, baseDef: 20, baseAtkEsp: 45, baseDefEsp: 25, baseVelocidade: 20 },
    { nome: 'Wigglytuff', numeroDex: 40, baseHp: 140, baseAtk: 70, baseDef: 45, baseAtkEsp: 85, baseDefEsp: 50, baseVelocidade: 45 },
    { nome: 'Zubat', numeroDex: 41, baseHp: 40, baseAtk: 45, baseDef: 35, baseAtkEsp: 30, baseDefEsp: 40, baseVelocidade: 55 },
    { nome: 'Golbat', numeroDex: 42, baseHp: 75, baseAtk: 80, baseDef: 70, baseAtkEsp: 65, baseDefEsp: 75, baseVelocidade: 90 },
    { nome: 'Oddish', numeroDex: 43, baseHp: 45, baseAtk: 50, baseDef: 55, baseAtkEsp: 75, baseDefEsp: 65, baseVelocidade: 30 },
    { nome: 'Gloom', numeroDex: 44, baseHp: 60, baseAtk: 65, baseDef: 70, baseAtkEsp: 85, baseDefEsp: 75, baseVelocidade: 40 },
    { nome: 'Vileplume', numeroDex: 45, baseHp: 75, baseAtk: 80, baseDef: 85, baseAtkEsp: 110, baseDefEsp: 90, baseVelocidade: 50 },
    { nome: 'Paras', numeroDex: 46, baseHp: 35, baseAtk: 70, baseDef: 55, baseAtkEsp: 45, baseDefEsp: 55, baseVelocidade: 25 },
    { nome: 'Parasect', numeroDex: 47, baseHp: 60, baseAtk: 95, baseDef: 80, baseAtkEsp: 60, baseDefEsp: 80, baseVelocidade: 30 },
    { nome: 'Venonat', numeroDex: 48, baseHp: 60, baseAtk: 55, baseDef: 50, baseAtkEsp: 40, baseDefEsp: 55, baseVelocidade: 45 },
    { nome: 'Venomoth', numeroDex: 49, baseHp: 70, baseAtk: 65, baseDef: 60, baseAtkEsp: 90, baseDefEsp: 75, baseVelocidade: 90 },
    { nome: 'Diglett', numeroDex: 50, baseHp: 10, baseAtk: 55, baseDef: 25, baseAtkEsp: 35, baseDefEsp: 45, baseVelocidade: 95 },
    { nome: 'Dugtrio', numeroDex: 51, baseHp: 35, baseAtk: 100, baseDef: 50, baseAtkEsp: 50, baseDefEsp: 70, baseVelocidade: 120 },
    { nome: 'Meowth', numeroDex: 52, baseHp: 40, baseAtk: 45, baseDef: 35, baseAtkEsp: 40, baseDefEsp: 40, baseVelocidade: 90 },
    { nome: 'Persian', numeroDex: 53, baseHp: 65, baseAtk: 70, baseDef: 60, baseAtkEsp: 65, baseDefEsp: 65, baseVelocidade: 115 },
    { nome: 'Psyduck', numeroDex: 54, baseHp: 50, baseAtk: 52, baseDef: 48, baseAtkEsp: 65, baseDefEsp: 50, baseVelocidade: 55 },
    { nome: 'Golduck', numeroDex: 55, baseHp: 80, baseAtk: 82, baseDef: 78, baseAtkEsp: 95, baseDefEsp: 80, baseVelocidade: 85 },
    { nome: 'Mankey', numeroDex: 56, baseHp: 40, baseAtk: 80, baseDef: 35, baseAtkEsp: 35, baseDefEsp: 45, baseVelocidade: 70 },
    { nome: 'Primeape', numeroDex: 57, baseHp: 65, baseAtk: 105, baseDef: 60, baseAtkEsp: 60, baseDefEsp: 70, baseVelocidade: 95 },
    { nome: 'Growlithe', numeroDex: 58, baseHp: 55, baseAtk: 70, baseDef: 45, baseAtkEsp: 70, baseDefEsp: 50, baseVelocidade: 60 },
    { nome: 'Arcanine', numeroDex: 59, baseHp: 90, baseAtk: 110, baseDef: 80, baseAtkEsp: 100, baseDefEsp: 80, baseVelocidade: 95 },
    { nome: 'Poliwag', numeroDex: 60, baseHp: 40, baseAtk: 50, baseDef: 40, baseAtkEsp: 40, baseDefEsp: 40, baseVelocidade: 90 },
    { nome: 'Poliwhirl', numeroDex: 61, baseHp: 65, baseAtk: 65, baseDef: 65, baseAtkEsp: 50, baseDefEsp: 50, baseVelocidade: 90 },
    { nome: 'Poliwrath', numeroDex: 62, baseHp: 90, baseAtk: 95, baseDef: 95, baseAtkEsp: 70, baseDefEsp: 90, baseVelocidade: 70 },
    { nome: 'Abra', numeroDex: 63, baseHp: 25, baseAtk: 20, baseDef: 15, baseAtkEsp: 105, baseDefEsp: 55, baseVelocidade: 90 },
    { nome: 'Kadabra', numeroDex: 64, baseHp: 40, baseAtk: 35, baseDef: 30, baseAtkEsp: 120, baseDefEsp: 70, baseVelocidade: 105 },
    { nome: 'Alakazam', numeroDex: 65, baseHp: 55, baseAtk: 50, baseDef: 45, baseAtkEsp: 135, baseDefEsp: 95, baseVelocidade: 120 },
    { nome: 'Machop', numeroDex: 66, baseHp: 70, baseAtk: 80, baseDef: 50, baseAtkEsp: 35, baseDefEsp: 35, baseVelocidade: 35 },
    { nome: 'Machoke', numeroDex: 67, baseHp: 80, baseAtk: 100, baseDef: 70, baseAtkEsp: 50, baseDefEsp: 60, baseVelocidade: 45 },
    { nome: 'Machamp', numeroDex: 68, baseHp: 90, baseAtk: 130, baseDef: 80, baseAtkEsp: 65, baseDefEsp: 85, baseVelocidade: 55 },
    { nome: 'Bellsprout', numeroDex: 69, baseHp: 50, baseAtk: 75, baseDef: 35, baseAtkEsp: 70, baseDefEsp: 30, baseVelocidade: 40 },
    { nome: 'Weepinbell', numeroDex: 70, baseHp: 65, baseAtk: 90, baseDef: 50, baseAtkEsp: 85, baseDefEsp: 45, baseVelocidade: 55 },
    { nome: 'Victreebel', numeroDex: 71, baseHp: 80, baseAtk: 105, baseDef: 65, baseAtkEsp: 100, baseDefEsp: 70, baseVelocidade: 70 },
    { nome: 'Tentacool', numeroDex: 72, baseHp: 40, baseAtk: 40, baseDef: 35, baseAtkEsp: 50, baseDefEsp: 100, baseVelocidade: 70 },
    { nome: 'Tentacruel', numeroDex: 73, baseHp: 80, baseAtk: 70, baseDef: 65, baseAtkEsp: 80, baseDefEsp: 120, baseVelocidade: 100 },
    { nome: 'Geodude', numeroDex: 74, baseHp: 40, baseAtk: 80, baseDef: 100, baseAtkEsp: 30, baseDefEsp: 30, baseVelocidade: 20 },
    { nome: 'Graveler', numeroDex: 75, baseHp: 55, baseAtk: 95, baseDef: 115, baseAtkEsp: 45, baseDefEsp: 45, baseVelocidade: 35 },
    { nome: 'Golem', numeroDex: 76, baseHp: 80, baseAtk: 110, baseDef: 130, baseAtkEsp: 55, baseDefEsp: 65, baseVelocidade: 45 },
    { nome: 'Ponyta', numeroDex: 77, baseHp: 50, baseAtk: 85, baseDef: 55, baseAtkEsp: 65, baseDefEsp: 65, baseVelocidade: 90 },
    { nome: 'Rapidash', numeroDex: 78, baseHp: 65, baseAtk: 100, baseDef: 70, baseAtkEsp: 80, baseDefEsp: 80, baseVelocidade: 105 },
    { nome: 'Slowpoke', numeroDex: 79, baseHp: 90, baseAtk: 65, baseDef: 65, baseAtkEsp: 40, baseDefEsp: 40, baseVelocidade: 15 },
    { nome: 'Slowbro', numeroDex: 80, baseHp: 95, baseAtk: 75, baseDef: 110, baseAtkEsp: 100, baseDefEsp: 80, baseVelocidade: 30 },
    { nome: 'Magnemite', numeroDex: 81, baseHp: 25, baseAtk: 35, baseDef: 70, baseAtkEsp: 95, baseDefEsp: 55, baseVelocidade: 45 },
    { nome: 'Magneton', numeroDex: 82, baseHp: 50, baseAtk: 60, baseDef: 95, baseAtkEsp: 120, baseDefEsp: 70, baseVelocidade: 70 },
    { nome: 'Farfetch\'d', numeroDex: 83, baseHp: 52, baseAtk: 65, baseDef: 55, baseAtkEsp: 58, baseDefEsp: 62, baseVelocidade: 60 },
    { nome: 'Doduo', numeroDex: 84, baseHp: 40, baseAtk: 85, baseDef: 45, baseAtkEsp: 35, baseDefEsp: 35, baseVelocidade: 75 },
    { nome: 'Dodrio', numeroDex: 85, baseHp: 60, baseAtk: 110, baseDef: 70, baseAtkEsp: 60, baseDefEsp: 60, baseVelocidade: 110 },
    { nome: 'Seel', numeroDex: 86, baseHp: 65, baseAtk: 45, baseDef: 55, baseAtkEsp: 56, baseDefEsp: 70, baseVelocidade: 40 },
    { nome: 'Dewgong', numeroDex: 87, baseHp: 90, baseAtk: 70, baseDef: 80, baseAtkEsp: 70, baseDefEsp: 95, baseVelocidade: 60 },
    { nome: 'Grimer', numeroDex: 88, baseHp: 80, baseAtk: 80, baseDef: 50, baseAtkEsp: 40, baseDefEsp: 50, baseVelocidade: 25 },
    { nome: 'Muk', numeroDex: 89, baseHp: 105, baseAtk: 105, baseDef: 75, baseAtkEsp: 65, baseDefEsp: 100, baseVelocidade: 50 },
    { nome: 'Shellder', numeroDex: 90, baseHp: 30, baseAtk: 65, baseDef: 100, baseAtkEsp: 45, baseDefEsp: 25, baseVelocidade: 40 },
    { nome: 'Cloyster', numeroDex: 91, baseHp: 50, baseAtk: 95, baseDef: 180, baseAtkEsp: 85, baseDefEsp: 45, baseVelocidade: 70 },
    { nome: 'Gastly', numeroDex: 92, baseHp: 30, baseAtk: 35, baseDef: 30, baseAtkEsp: 100, baseDefEsp: 35, baseVelocidade: 80 },
    { nome: 'Haunter', numeroDex: 93, baseHp: 45, baseAtk: 50, baseDef: 45, baseAtkEsp: 115, baseDefEsp: 55, baseVelocidade: 95 },
    { nome: 'Gengar', numeroDex: 94, baseHp: 60, baseAtk: 65, baseDef: 60, baseAtkEsp: 130, baseDefEsp: 75, baseVelocidade: 110 },
    { nome: 'Onix', numeroDex: 95, baseHp: 35, baseAtk: 45, baseDef: 160, baseAtkEsp: 30, baseDefEsp: 45, baseVelocidade: 70 },
    { nome: 'Drowzee', numeroDex: 96, baseHp: 60, baseAtk: 48, baseDef: 45, baseAtkEsp: 43, baseDefEsp: 90, baseVelocidade: 42 },
    { nome: 'Hypno', numeroDex: 97, baseHp: 85, baseAtk: 73, baseDef: 70, baseAtkEsp: 73, baseDefEsp: 115, baseVelocidade: 67 },
    { nome: 'Krabby', numeroDex: 98, baseHp: 30, baseAtk: 105, baseDef: 90, baseAtkEsp: 25, baseDefEsp: 25, baseVelocidade: 50 },
    { nome: 'Kingler', numeroDex: 99, baseHp: 55, baseAtk: 130, baseDef: 115, baseAtkEsp: 50, baseDefEsp: 50, baseVelocidade: 75 },
    { nome: 'Voltorb', numeroDex: 100, baseHp: 40, baseAtk: 30, baseDef: 40, baseAtkEsp: 55, baseDefEsp: 55, baseVelocidade: 100 },
    { nome: 'Electrode', numeroDex: 101, baseHp: 60, baseAtk: 50, baseDef: 70, baseAtkEsp: 80, baseDefEsp: 80, baseVelocidade: 140 },
    { nome: 'Exeggcute', numeroDex: 102, baseHp: 60, baseAtk: 40, baseDef: 80, baseAtkEsp: 60, baseDefEsp: 45, baseVelocidade: 40 },
    { nome: 'Exeggutor', numeroDex: 103, baseHp: 95, baseAtk: 95, baseDef: 80, baseAtkEsp: 125, baseDefEsp: 65, baseVelocidade: 55 },
    { nome: 'Cubone', numeroDex: 104, baseHp: 50, baseAtk: 50, baseDef: 95, baseAtkEsp: 40, baseDefEsp: 50, baseVelocidade: 35 },
    { nome: 'Marowak', numeroDex: 105, baseHp: 60, baseAtk: 80, baseDef: 110, baseAtkEsp: 50, baseDefEsp: 80, baseVelocidade: 45 },
    { nome: 'Hitmonlee', numeroDex: 106, baseHp: 50, baseAtk: 120, baseDef: 53, baseAtkEsp: 35, baseDefEsp: 110, baseVelocidade: 87 },
    { nome: 'Hitmonchan', numeroDex: 107, baseHp: 50, baseAtk: 105, baseDef: 79, baseAtkEsp: 35, baseDefEsp: 110, baseVelocidade:76 },    { nome: 'Lickitung', numeroDex: 108, baseHp: 90, baseAtk: 55, baseDef: 75, baseAtkEsp: 60, baseDefEsp: 75, baseVelocidade: 30 },
    { nome: 'Koffing', numeroDex: 109, baseHp: 65, baseAtk: 65, baseDef: 95, baseAtkEsp: 90, baseDefEsp: 45, baseVelocidade: 35 },
    { nome: 'Weezing', numeroDex: 110, baseHp: 65, baseAtk: 90, baseDef: 120, baseAtkEsp: 85, baseDefEsp: 70, baseVelocidade: 60 },
    { nome: 'Rhyhorn', numeroDex: 111, baseHp: 80, baseAtk: 85, baseDef: 40, baseAtkEsp: 30, baseDefEsp: 30, baseVelocidade: 25 },
    { nome: 'Rhydon', numeroDex: 112, baseHp: 105, baseAtk: 130, baseDef: 60, baseAtkEsp: 45, baseDefEsp: 50, baseVelocidade: 40 },
    { nome: 'Chansey', numeroDex: 113, baseHp: 250, baseAtk: 5, baseDef: 5, baseAtkEsp: 35, baseDefEsp: 105, baseVelocidade: 50 },
    { nome: 'Tangela', numeroDex: 114, baseHp: 65, baseAtk: 55, baseDef: 115, baseAtkEsp: 100, baseDefEsp: 40, baseVelocidade: 60 },
    { nome: 'Kangaskhan', numeroDex: 115, baseHp: 105, baseAtk: 95, baseDef: 80, baseAtkEsp: 40, baseDefEsp: 80, baseVelocidade: 90 },
    { nome: 'Horsea', numeroDex: 116, baseHp: 30, baseAtk: 40, baseDef: 70, baseAtkEsp: 70, baseDefEsp: 25, baseVelocidade: 60 },
    { nome: 'Seadra', numeroDex: 117, baseHp: 55, baseAtk: 65, baseDef: 95, baseAtkEsp: 95, baseDefEsp: 45, baseVelocidade: 85 },
    { nome: 'Goldeen', numeroDex: 118, baseHp: 45, baseAtk: 67, baseDef: 60, baseAtkEsp: 35, baseDefEsp: 50, baseVelocidade: 63 },
    { nome: 'Seaking', numeroDex: 119, baseHp: 80, baseAtk: 92, baseDef: 65, baseAtkEsp: 65, baseDefEsp: 80, baseVelocidade: 68 },
    { nome: 'Staryu', numeroDex: 120, baseHp: 30, baseAtk: 45, baseDef: 55, baseAtkEsp: 70, baseDefEsp: 55, baseVelocidade: 85 },
    { nome: 'Starmie', numeroDex: 121, baseHp: 60, baseAtk: 75, baseDef: 85, baseAtkEsp: 100, baseDefEsp: 85, baseVelocidade: 115 },
    { nome: 'Mr. Mime', numeroDex: 122, baseHp: 40, baseAtk: 45, baseDef: 65, baseAtkEsp: 100, baseDefEsp: 120, baseVelocidade: 90 },
    { nome: 'Scyther', numeroDex: 123, baseHp: 70, baseAtk: 110, baseDef: 80, baseAtkEsp: 55, baseDefEsp: 80, baseVelocidade: 105 },
    { nome: 'Jynx', numeroDex: 124, baseHp: 65, baseAtk: 50, baseDef: 35, baseAtkEsp: 115, baseDefEsp: 95, baseVelocidade: 95 },
    { nome: 'Electabuzz', numeroDex: 125, baseHp: 65, baseAtk: 83, baseDef: 57, baseAtkEsp: 95, baseDefEsp: 85, baseVelocidade: 105 },
    { nome: 'Magmar', numeroDex: 126, baseHp: 65, baseAtk: 95, baseDef: 57, baseAtkEsp: 100, baseDefEsp: 85, baseVelocidade: 93 },
    { nome: 'Pinsir', numeroDex: 127, baseHp: 65, baseAtk: 125, baseDef: 100, baseAtkEsp: 35, baseDefEsp: 70, baseVelocidade: 85 },
    { nome: 'Tauros', numeroDex: 128, baseHp: 75, baseAtk: 100, baseDef: 95, baseAtkEsp: 40, baseDefEsp: 70, baseVelocidade: 110 },
    { nome: 'Magikarp', numeroDex: 129, baseHp: 20, baseAtk: 10, baseDef: 55, baseAtkEsp: 15, baseDefEsp: 20, baseVelocidade: 80 },
    { nome: 'Gyarados', numeroDex: 130, baseHp: 95, baseAtk: 125, baseDef: 79, baseAtkEsp: 60, baseDefEsp: 100, baseVelocidade: 81 },
    { nome: 'Lapras', numeroDex: 131, baseHp: 130, baseAtk: 85, baseDef: 80, baseAtkEsp: 85, baseDefEsp: 95, baseVelocidade: 60 },
    { nome: 'Ditto', numeroDex: 132, baseHp: 48, baseAtk: 48, baseDef: 48, baseAtkEsp: 48, baseDefEsp: 48, baseVelocidade: 48 },
    { nome: 'Eevee', numeroDex: 133, baseHp: 55, baseAtk: 40, baseDef: 50, baseAtkEsp: 45, baseDefEsp: 65, baseVelocidade: 55 },
    { nome: 'Vaporeon', numeroDex: 134, baseHp: 130, baseAtk: 65, baseDef: 60, baseAtkEsp: 110, baseDefEsp: 95, baseVelocidade: 65 },
    { nome: 'Jolteon', numeroDex: 135, baseHp: 65, baseAtk: 65, baseDef: 60, baseAtkEsp: 110, baseDefEsp: 95, baseVelocidade: 130 },
    { nome: 'Flareon', numeroDex: 136, baseHp: 65, baseAtk: 130, baseDef: 60, baseAtkEsp: 95, baseDefEsp: 110, baseVelocidade: 65 },
    { nome: 'Porygon', numeroDex: 137, baseHp: 65, baseAtk: 60, baseDef: 70, baseAtkEsp: 85, baseDefEsp: 75, baseVelocidade: 40 },
    { nome: 'Omanyte', numeroDex: 138, baseHp: 35, baseAtk: 40, baseDef: 100, baseAtkEsp: 90, baseDefEsp: 55, baseVelocidade: 35 },
    { nome: 'Omastar', numeroDex: 139, baseHp: 70, baseAtk: 60, baseDef: 125, baseAtkEsp: 115, baseDefEsp: 70, baseVelocidade: 55 },
    { nome: 'Kabuto', numeroDex: 140, baseHp: 30, baseAtk: 80, baseDef: 90, baseAtkEsp: 55, baseDefEsp: 55, baseVelocidade: 55 },
    { nome: 'Kabutops', numeroDex: 141, baseHp: 60, baseAtk: 115, baseDef: 105, baseAtkEsp: 65, baseDefEsp: 70, baseVelocidade: 80 },
    { nome: 'Aerodactyl', numeroDex: 142, baseHp: 80, baseAtk: 105, baseDef: 65, baseAtkEsp: 60, baseDefEsp: 75, baseVelocidade: 130 },
    { nome: 'Snorlax', numeroDex: 143, baseHp: 160, baseAtk: 110, baseDef: 65, baseAtkEsp: 65, baseDefEsp: 110, baseVelocidade: 30 },
    { nome: 'Articuno', numeroDex: 144, baseHp: 90, baseAtk: 85, baseDef: 100, baseAtkEsp: 95, baseDefEsp: 125, baseVelocidade: 85 },
    { nome: 'Zapdos', numeroDex: 145, baseHp: 90, baseAtk: 90, baseDef: 85, baseAtkEsp: 125, baseDefEsp: 90, baseVelocidade: 100 },
    { nome: 'Moltres', numeroDex: 146, baseHp: 90, baseAtk: 100, baseDef: 90, baseAtkEsp: 125, baseDefEsp: 85, baseVelocidade: 90 },
    { nome: 'Dratini', numeroDex: 147, baseHp: 41, baseAtk: 64, baseDef: 45, baseAtkEsp: 50, baseDefEsp: 50, baseVelocidade: 50 },
    { nome: 'Dragonair', numeroDex: 148, baseHp: 61, baseAtk: 84, baseDef: 65, baseAtkEsp: 70, baseDefEsp: 70, baseVelocidade: 60 },
    { nome: 'Dragonite', numeroDex: 149, baseHp: 91, baseAtk: 134, baseDef: 95, baseAtkEsp: 100, baseDefEsp: 100, baseVelocidade: 80 },
    { nome: 'Mewtwo', numeroDex: 150, baseHp: 106, baseAtk: 110, baseDef: 90, baseAtkEsp: 154, baseDefEsp: 90, baseVelocidade: 130 },
    { nome: 'Mew', numeroDex: 151, baseHp: 100, baseAtk: 100, baseDef: 100, baseAtkEsp: 100, baseDefEsp: 100, baseVelocidade: 100 }]

// Nível padrão para todos os Pokémon
const nivel = 50;

        // Função para calcular o HP
        function calcularHP(baseHP: number, nivel: number): number {
        return Math.floor(((2 * baseHP * nivel) / 100) + nivel + 10);
    }

// Função para calcular os outros status (Ataque, Defesa, etc.)
function calcularStatus(baseStatus: number, nivel: number): number {
        return Math.floor(((2 * baseStatus * nivel) / 100) + 5);
    }

// Loop para adicionar todos os Pokémon à pokedex
for (const base of baseStats) {
    let pokemon: Pokemon = {
        nome: base.nome,
        numeroDex: base.numeroDex,
        nivel: nivel,
        hp: calcularHP(base.baseHp, nivel),
        atk: calcularStatus(base.baseAtk, nivel),
        def: calcularStatus(base.baseDef, nivel),
        atkEsp: calcularStatus(base.baseAtkEsp, nivel),
        defEsp: calcularStatus(base.baseDefEsp, nivel),
        velocidade: calcularStatus(base.baseVelocidade, nivel)
    };

    // Adicionando o Pokémon à Pokédex
    pokeDex.push(pokemon);
}

// Exibindo todos os Pokémon na Pokédex
console.log("Pokédex:");
pokeDex.forEach(pokemon => {
    console.log(`${pokemon.numeroDex} - ${pokemon.nome}: HP ${pokemon.hp}, Ataque ${pokemon.atk}, Defesa ${pokemon.def}, AtkEsp ${pokemon.atkEsp}, DefEsp ${pokemon.defEsp}, Velocidade ${pokemon.velocidade}`);
});
