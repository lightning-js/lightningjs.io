Blits.Application({
    template: `
        <Element w="1920" h="1080" color="#000">
            <Text :content="$title"/>
        </Element>
    `,
    state() {
        return {
            title: 'Blits!'
        }
    },
    input: {
        enter() {
            this.title = 'Blits! is! awesome!'
        }
    }
})

