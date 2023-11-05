$("form").on("click", "#search", search);
$("form").on("click", "#remove", removeImages);
$("form").on("submit", search);

async function search(e) {
    e.preventDefault();
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", q: $("form input").val() } });
    const newGif = $(`<img class="gif">`).attr("src", response.data.data[0].images.original.url);
    $("#gif-container").append(newGif);
    $("form input").val("");
};

function removeImages() { $("img").remove() };