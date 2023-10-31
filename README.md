# Poster Picker

Pick your favorite poster during the Design Module final presentations!

## Developing

The app runs on SvelteKit, with a PocketBase backend. No simpler stack has ever existed :)

### Front end

Once you've pulled this repository, run `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Back end

Spin up a PocketBase back end and import the migration found in `pb-schema.json`, that's it!

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
