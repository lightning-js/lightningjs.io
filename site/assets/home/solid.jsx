const App = () => {
    const [title, setTitle] = createSignal('SolidJS')
    const onEnter = () => {
      setTitle('Lightning Renderer works with SolidJS')
    }
    return (
      <View onEnter={onEnter}>
        <Text>{title()}</Text>
      </View>
    )
  }