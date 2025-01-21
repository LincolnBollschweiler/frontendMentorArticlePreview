export const card = {
  init: () => {
    $(document)
      .on("click", ".social", (e) => {
        const url = $(e.target).data("url");
        window.open(url, "_blank");
      })
      .on("click", ".card .share", () => {
        $(".share-links").toggleClass("show");
      });

    return cardHtml;
  },
};

const cardHtml = `
  <div class="card">
    <img id="drawers" src="images/drawers.jpg" alt="old timey living room hutch" />
    <div class="card-body flex">
      <p>
        Shift the overall look and feel by adding these wonderful touches to furniture in your home
      </p>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
      </p>
      <div class="flex card-footer">
        <div class="flex author">
          <img src="images/avatar-michelle.jpg" alt="author" />
          <div class="flex author-info">
            <div class="author-name">Michelle Appleton</div>
            <time>28 Jun 2020</time>
          </div>
        </div>
        <div role="button" class="share">
          <div><img src="images/icon-share.svg" alt="share" /></div>
          <div class="flex share-links">
            <div>S H A R E</div>
            <img class="social" src="images/icon-facebook.svg" alt="facebook" data-url="https://www.facebook.com/sharer/sharer.php?u=https://www.frontendmentor.io/" />
            <img class="social" src="images/icon-twitter.svg" alt="twitter" data-url="https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20site%20I%20found%20on%20Frontend%20Mentor%20https://www.frontendmentor.io/" />
            <img class="social" src="images/icon-pinterest.svg" alt="pinterest" data-url="https://pinterest.com/pin/create/button/?url=https://www.frontendmentor.io/&media=&description=Check%20out%20this%20cool%20site%20I%20found%20on%20Frontend%20Mentor" />
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
