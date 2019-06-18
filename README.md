# How to start

Start Development Server:

> npm install

> npm start

Run Tests:

> npm test

# This project uses

- create-react-app
- css modules
- react-router
- class components
- Jest / Enzyme

# Info

- Just local state, so not possible to reload pages that don't have an hardcoded id.

# Possible improvements

- Add modal to confirm the deletions.
- Use something like Cloudinary to serve the appropriate image size on the cdn edge.
- Change from the currency formatter to a library.
- Speed up update/insert beaches by sorting the array (can use binary search after).
- Speed up update/insert beaches by changing from array to hash.
- Different image sizes for the beaches + load them as needed
- Flickering when the last thing you do in a beach, is change the price.
- Optimize for mobile (media queries, show edit/delete icons by default, etc.).
- Add form validation.
- Use formik instead of manually creating forms.
- Add proptypes.
- Warn if a page is not found.

# Credits

Beach images downloaded from unsplash.com and pexels.com.

- Add icon: https://iconmonstr.com/plus-5-svg/
- Edit icon: https://iconmonstr.com/pencil-9-svg/
- Delete icon: https://iconmonstr.com/trash-can-1-svg/
