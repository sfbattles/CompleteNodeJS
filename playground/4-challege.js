const timeout = 2000;

setTimeout(() => {
   console.log('two second are up');
}, timeout);

const names = ['andrew', 'jen', 'richard' ];

const shortnames = names.filter((names) => {
  return names.length <= 4;
});

const geocode = (address, callback) => {
  const data = {
      latitude: 0,
      longitude: 0
  }
  return data
};

const data = geocode ('quakertown');
console.log(data);