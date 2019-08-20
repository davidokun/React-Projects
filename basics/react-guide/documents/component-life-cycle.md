# Class Component Life Cycle

1.  `constructor(props)`
    - Call `super(props)`
    - DO: Setup state
    - DON'T: Cause side effects
    
2.  `getDerivedStateFromProps(props, state)`
    - DO: Sync state
    - DON'T: Cause side effects
    
3.  `render()`
    - Prepare and Structure JSX code
    
4. `Render child components`

5.  `componentDidMount()`
    - DO: Cause side effects
    - DON'T: Update state (triggers re-render)
