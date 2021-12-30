export const fetchBlogPosts = () => {
  let posts = [];

  fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40cameronjameskingsley&api_key=i04qkl8ivtozytrcqqpbitvzx17zfgyubfkeyluk"
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json.items);

      return json.items;
    });
};
