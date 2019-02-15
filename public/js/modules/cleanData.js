export function cleanData(res) {

    return {
        name: res.name,
        types: res.types.map(type => {
          return `<span class="pokemon-type ${type.type.name}">${type.type.name}</span>`
        }).join(' '),
        sprites: {
          back_default: res.sprites.back_default,
          front_default: res.sprites.front_default
        },
        stats: res.stats.map(stats => {
          return `<span class="pokemon-stats-name">${stats.stat.name}</span>
          <span class="pokemon-stats-base-stat">${stats.base_stat}</span>`
        }).join(' ')
    }
}
