const replace = require('replace-in-file');
const js = {
  files: 'build/index.html',
  from: /(src=")\/?/g,
  to: 'src="./'
};
const image = {
  files: 'build/index.html',
  from: /(href=")\/?/g,
  to: 'href="./'
}

try {
  let results = replace.sync(js);
  console.log('Replaced src:', results);
  results = replace.sync(image);
  console.log('Replaced href:', results);
} catch (e) {
  console.error('Error replacing:', e);
}
