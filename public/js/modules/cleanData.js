export function cleanData(res) {
    return {
        name: res.name,
        types: res.types.map(types => {
          return `<a href="#type/${types.type.name}" class="pokemon-type ${types.type.name}" id="${types.type.url}">${types.type.name}</a>`
        }).join(' '),
        typeNames: res.types.map(types => {
          return types.type.name
        }),
        sprites: {
          back_default: res.sprites.back_default,
          front_default: res.sprites.front_default,
          back_shiny_default: res.sprites.back_shiny,
          front_shiny_default: res.sprites.front_shiny
        },
        stats: res.stats.map(stats => {
          return `
          <div class="pokemon-single-stat">
            <span class="pokemon-stat-name">${stats.stat.name}</span>
            <span class="pokemon-stat-base-stat">${stats.base_stat}</span>
          </div>`
        }).join(' ')
    }
}
