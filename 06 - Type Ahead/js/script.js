(async () => {
  const input = document.querySelector('.search');
  const list = document.querySelector('ul.suggestions');

  input.addEventListener('input', handleChange);

  // fetch data and preprocess
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const cities = await fetch(endpoint).then(res => res.json()).then(results => {
    return results.map(c => ({
      ...c,
      lowCity: c.city.toLowerCase(),
      lowState: c.state.toLowerCase(),
      title: `${c.city}, ${c.state}`,
    }));
  });

  function handleChange(event) {
    const value = event.target.value.trim();
    const parts = value.split(' ').map(s => s.toLowerCase());

    if (!value) return list.innerHTML = '';

    // only include cities that have a match for each part of input
    const results = cities.filter(c => {
      let matchAll = true;
      parts.forEach(part => {
        if (!matchAll) return;
        matchAll = c.lowCity.includes(part) || c.lowState.includes(part);
      });
      return matchAll;
    });

    // highlight matches in suggestion
    const suggestions = results.map(city => {
      let titleHTML = city.title;
      parts.forEach(part => {
        const exp = new RegExp(`(${part})`, 'i');
        titleHTML = titleHTML.replace(exp, '<mark>$1</mark>');
      });
      return makeSuggestion(titleHTML, city.population);
    });

    // add suggestions to page
    list.innerHTML = '';
    suggestions.forEach(sug => list.appendChild(sug));
  }

  function makeSuggestion(titleHTML, population) {
    const li = document.createElement('li');
    const left = document.createElement('span');
    const right = document.createElement('span');
    left.innerHTML = titleHTML;
    right.textContent = population;
    [left, right].forEach(c => li.appendChild(c));
    return li;
  }
})();
