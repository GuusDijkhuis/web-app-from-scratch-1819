export function cleanData(res) {
    return {
        name: res.name,
        types: res.types.map(type => {
          return `<span class="pokemon_type ${type.type.name}">${type.type.name}</span>`
        }),
        back_default: res.sprites.back_default,
        front_default: res.sprites.front_default
    }
}
