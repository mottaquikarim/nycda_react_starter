# todolist_flux

How to clone:

```bash
git clone --branch lecture_57_react-intro https://github.com/mottaquikarim/todolist_flux
```

## Requirements

1. Create a new component, CompC that will take a prop called `num`. It will display `num` only if it is divisible by 10. Otherwise it will say `Not divisible by 10'.
2. Update component Main to include a state value called `numState`. On button click, `numState` should updated by **15**. Main should include `CompC` in it's children and pass in prop called `num` that equals to state value `numState`
