let allElves = ['Амариэ', 'Амдир', 'Амрас', 'Амрод', 'Амрот', 'Анайрэ', 'Ангрод', 'Аргон', 'Аредэль', 'Арвен', 'Аэгнор', 'Белег', 'Воронвэ', 'Галадон', 'Галадриэль', 'Галатиль', 'Галдор из Гаваней', 'Галдор из Гондолина', 'Галион', 'Гвиндор', 'Гилдор Инглорион', 'Гил-Галад (Эрейнион)', 'Гимли', 'Глорфиндел', 'Даэрон', 'Дэнетор', 'Дуилин', 'Идриль', 'Имин', 'Иминиэ', 'Ингвион', 'Ингвэ', 'Инглор', 'Индис', 'Иримэ', 'Карантир', 'Квеннар и-Онотимо', 'Келеборн', 'Келебриан', 'Келебримбор', 'Келегорм', 'Кирдан', 'Куруфин', 'Леголас из Гондолина', 'Леголас из Лихолесья', 'Линдир', 'Лютиэн Тинувиэль', 'Маблунг', 'Маглор', 'Махтан', 'Маэглин', 'Маэдрос', 'Мириэль Сериндэ', 'Митреллас', 'Неллас', 'Нерданэль', 'Нимлот', 'Нимродэль', 'Ольвэ', 'Ородрет', 'Орофер', 'Орофин', 'Пенголод', 'Пенлод', 'Рог', 'Румил из Лориэна', 'Румил из Тириона', 'Салгант', 'Саэрос', 'Тата', 'Татиэ', 'Тингол', 'Трандуил', 'Тургон', 'Феанор', 'Финарфин', 'Финвэ', 'Финдис', 'Финдуилас', 'Финголфин', 'Фингон', 'Финрод Фелагунд', 'Халдир', 'Эарвен', 'Эгалмот', 'Эктелион', 'Элеммакил', 'Эленвэ', 'Элу Тингол (Эльвэ)', 'Эльмо', 'Энелиэ', 'Энель', 'Энердил', 'Элладан и Элрохир', 'Элронд', 'Эльдалотэ', 'Эол', 'Эрестор'];
let allGems = ['Алмаз', 'Хризолит', 'Эвклаз', 'Корунд', 'Рубин', 'Сапфир', 'Тааффеит', 'Берилл', 'Аквамарин', 'Изумруд', 'Гелиодор', 'Морганит', 'Хризоберилл', 'Александрит', 'Шпинель', 'Гранаты', 'Демантоид', 'Цаворит', 'Спессартин', 'Пироп', 'Родолит', 'Альмандин', 'Кварц', 'Аметист', 'Цитрин', 'Горный хрусталь', 'Дымчатый кварц', 'Празиолит', 'Аметрин', 'Розовый кварц', 'Турмалин', 'Верделит', 'Индиголит', 'Параиба', 'Опал благородный', 'Опал огненный', 'Топаз', 'Танзанит', 'Циркон', 'Гиацинт', 'Андалузит'];


// здесь реализуйте фигуры, команды

// Движение - это функция, которая принимает в качестве аргумента эльфа
// а возвращает Promise, который будет выполнен тогда, когда эльф выполнит
// указанное движение. Успешно выполненное движение должно зарезолвится снова
// в этого же эльфа с обновленной пастурой.

function leftHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [1, elf.stance[1], elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftHandDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [0, elf.stance[1], elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], 1, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], 0, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function bothHandsUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [1, 1, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function bothHandsDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [0, 0, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftLegApart(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 1, elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftLegGather(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 0, elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightLegApart(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance =[elf.stance[0], elf.stance[1], elf.stance[2], 1];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightLegGather(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], 0];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function bothLegsApart(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 1, 1];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function bothLegsGather(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 0, 0];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function Drive(elf) {
  return bothHandsUp(elf).then(bothHandsDown).then(bothHandsUp).then(bothHandsDown);
}

function Wave(elf) {
  return leftHandUp(elf).then(rightHandUp).then(leftHandDown).then(rightHandDown);
}

function Fint(elf) {
  return bothLegsApart(elf).then(bothLegsGather);
}

function LeftSplit(elf) {
  return Promise.all([leftHandUp(elf), leftLegApart(elf)]).then(console.log("lol"));
}

function RightSplit(elf) {
  return Promise.all([rightHandUp(elf), rightLegApart(elf)]).then(console.log("lol"));
}

function Reverse(elf) {
  return bothLegsApart(elf).then(bothHandsUp).then(bothLegsGather).then(bothHandsDown);
}

function Spinner(elf) {
  return leftLegApart(elf).then(leftHandUp).then(rightHandUp).then(rightLegApart);
}

// Эта функция принимает в качестве аргумента эльфа и драгоценность, которая
// сейчас демонстрируется всем эльфам. Здесь нужно дать команду эльфу выполнить
// какую-то фигуру или команду и вернуть Promise
function displayGemToElf(elf, gem) {
  if (elf) {
    if (elf.favouriteGems.indexOf(gem) != -1) {
      return bothHandsUp(elf);
    }
    else if (elf.dislikedGems.indexOf(gem) != -1) {
      return bothHandsDown(elf);
    }
    else if (gem == "Кварц") {
      return Fint(elf);
    }
    else if (gem == "Цитрин") {
      return Drive(elf);
    }
    else if (gem == "Аметист") {
      return Wave(elf);
    }
    else if (gem == "Альмандин") {
      return LeftSplit(elf);
    }
    else if (gem == "Родолит") {
      return RightSplit(elf);
    }
    else if (gem == "Пироп") {
      return Reverse(elf);
    }
    else if (gem == "Спессартин") {
      return Spinner(elf);
    }
  }
  //return rightHandUp(elf)
}


// Эта функция принимает в качестве аргумента танец всех эльфов - массив их Promis'ов,
// и драгоценность, которая сейчас демонстрируется всем эльфам.
// Возвращает также танец всех эльфов - массив их Promis'ов
function continueDance(elvesPromises, gem) {
  return elvesPromises.map((elfPromise) => {
    return elfPromise.then(elf => {
      return displayGemToElf(elf, gem)
    })
  })
}
