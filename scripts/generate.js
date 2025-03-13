const { readFile } = require('fs').promises;
const { join } = require('path');
const { Type, DEFAULT_SCHEMA, load } = require('js-yaml');

module.exports = async () => {
    const yamlFile = await readFile(
        join(__dirname, '..', 'src', 'drakula.yml'),
        'utf-8'
    );

    const base = load(yamlFile, { DEFAULT_SCHEMA });

    for (const key of Object.keys(base.colors)) {
        if (!base.colors[key]) {
            delete base.colors[key];
        }
    }

    return {base};
}