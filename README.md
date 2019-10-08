# /r/pics

## deployed
This app was originally deployed, but reddit aggressively blocks larger hosting sites it appears. This still works when running locally, see below.

## run locally
1. `npm i`
2. `npm start`

## Requirements:
- [x] The page has a list of items corresponding to an entry in the fetched data
- [x] Each item in the list shows the image, and the title of the post
- [x]Each item in the list is somehow selectable, with a button on the page that hides all selected items

Not required, but nice to haves:
- [ ] Unit tests
- [x] If you use any state management, use hooks, for higher level states, use the React 16.8 Context API
  - Both context and hooks are used here for state management. The use of context here is a bit contrived with this app being smaller, but would be useful for extending in the future.

## Next Steps
- [ ] make design mroe responsive
- [ ] reset hidden `posts`
- [ ] write in TypeScript
- [ ] implement styled components
- [ ] 🚀