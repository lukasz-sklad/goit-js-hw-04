# goit-js-hw-04
### Zadanie domowe nr 4

Czas szybko leci, prawda?

Ostatnio nawet nie wiedziałeś, co to są obiekty, a teraz już wiesz jak:

* stworzyć obiekt w JavaScript
* dodać i zmienić wartość właściwości obiektu
* zaimplementować iterację po obiekcie
* pracować z tablicą jednorodnych obiektów
* odwoływać się do właściwości obiektu w jego metodach
* używać `spread` i `rest`
* Nadszedł czas, aby wykonać zadanie i ostatecznie utrwalić te umiejętności!



__Zadanie domowe №4__

* Stwórz repozytorium `goit-js-hw-04`.
* Stwórz osobny plik z rozszerzeniem `.js` dla każdego z zadań.
* Przeczytaj każde zadanie i wykonaj je w edytorze kodu.
* Upewnij się, że kod jest sformatowany za pomocą `Prettier`, a w konsoli nie ma błędów ani ostrzeżeń podczas otwierania żywej strony zadania.
* Prześlij domowe zadanie do sprawdzenia.


__Format oddania:__ Domowa praca zawiera dwa linki: do plików źródłowych i do działającej strony na `GitHub Pages`.


__Zadanie 1. Pakowanie towarów__

Napisz funkcję `isEnoughCapacity(products, containerSize)`, która oblicza, czy wszystkie towary zmieszczą się w kontenerze podczas pakowania.

Funkcja deklaruje dwa parametry:

* `products` — obiekt, w którym klucze zawierają nazwy towarów, a ich wartości — ilość tych towarów. Na przykład `{ apples: 2, grapes: 4 }`.
* `containerSize` — liczba, maksymalna ilość jednostek towaru, którą może pomieścić kontener.


Funkcja powinna zwrócić wynik sprawdzenia, czy wszystkie towary zmieszczą się w kontenerze. Czyli policzyć łączną ilość towarów w obiekcie `products` i zwrócić `true`, jeśli jest ona mniejsza lub równa `containerSize`, i `false`, jeśli nie.



Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli zostaną wyświetlone wyniki jej wywołań.


```
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false
```


Zostaw ten kod do sprawdzenia przez mentora.

Na co mentor będzie zwracał uwagę podczas sprawdzania:

* Zadeklarowana funkcja `isEnoughCapacity(products, containerSize)`
* Wywołanie `isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)` zwraca `true`
* Wywołanie `isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12` zwraca `false`
* Wywołanie `isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)` zwraca `true`
* Wywołanie `isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)` zwraca `false`


____Zadanie 2. Obliczanie kalorii__

Napisz funkcję `calcAverageCalories(days)`, która zwraca średnią dzienną wartość liczby kalorii, które sportowiec spożywał w ciągu tygodnia. Funkcja oczekuje jednego parametru: `days` — tablicy obiektów. Każdy obiekt opisuje dzień tygodnia oraz liczbę kalorii `calories`, spożytych przez sportowca tego dnia. Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli zostaną wyświetlone wyniki jej wywołań.


```
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0
```


Zostaw ten kod do sprawdzenia przez mentora.



__Na co będzie zwracał uwagę mentor przy sprawdzaniu:__


* Zadeklarowana funkcja `calcAverageCalories(days)`
* Taki wywołanie funkcji `calcAverageCalories zwraca 3180`

```
calcAverageCalories([
  { day: "monday", calories: 3010 },
  { day: "tuesday", calories: 3200 },
  { day: "wednesday", calories: 3120 },
  { day: "thursday", calories: 2900 },
  { day: "friday", calories: 3450 },
  { day: "saturday", calories: 3280 },
  { day: "sunday", calories: 3300 }
])
```

* Taki wywołanie funkcji `calcAverageCalories` zwraca `2270`

```
calcAverageCalories([
  { day: "monday", calories: 2040 },
  { day: "tuesday", calories: 2270 },
  { day: "wednesday", calories: 2420 },
  { day: "thursday", calories: 1900 },
  { day: "friday", calories: 2370 },
  { day: "saturday", calories: 2280 },
  { day: "sunday", calories: 2610 }
])
```

* Taki wywołanie funkcji `calcAverageCalories` zwraca `0`

```
calcAverageCalories([])
```


__Zadanie 3. Profil gracza__

Obiekt `profile` opisuje profil użytkownika na platformie do gier. W jego właściwościach przechowywane są nazwa profilu `username` oraz liczba aktywnych godzin `playTime`, spędzonych w grze.


```
const profile = {
	username: "Jacob",
  playTime: 300,
};
```


Uzupełnij obiekt `profile` metodami do pracy z jego właściwościami.

* Metoda `changeUsername(newName)` powinna przyjmować ciąg znaków (nową nazwę) w parametrze `newName` i zmieniać wartość właściwości `username` na nową. Niczego nie zwraca.
* Metoda `updatePlayTime(hours)` powinna przyjmować liczbę (ilość godzin) w parametrze `hours` i zwiększać o nią wartość właściwości `playTime`. Niczego nie zwraca.
* Metoda `getInfo()` powinna zwracać ciąg znaków w formacie `<Username>` ma `<amount> aktywnych godzin!`, gdzie `<Username>` to nazwa profilu, a `<amount>` to liczba godzin spędzonych w grze.


Weź kod poniżej i wstaw go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli zostaną wyświetlone wyniki jej działania.


```
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
```


Zostaw ten kod do sprawdzenia przez mentora.

Na co będzie zwracał uwagę mentor przy sprawdzaniu:

* Zadeklarowana zmienna `profile`
* Wartość zmiennej `profile` to obiekt z właściwościami `username`, `playTime`, `getInfo`, `changeUsername` i `updatePlayTime`
* Wartość właściwości `getInfo` to funkcja
* Wartość właściwości `changeUsername` to funkcja
* Wartość właściwości `updatePlayTime` to funkcja
* Do odwołania się do właściwości obiektu w jego metodach wykorzystywane jest `this`

https://lukasz-sklad.github.io/goit-js-hw-04/