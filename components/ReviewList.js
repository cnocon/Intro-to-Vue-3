app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
    <h3>Reviews</h3>
    <p v-show="reviews.length === 0">No reviews yet.</p>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} {{ review.recommended ? 'recommends' : 'does not recommend'}} this product.

        <br/>
        <b>{{ review.rating }}/5 Stars</b>

        <br/><br/>
        "{{ review.review }}"
        <br/>
      </li>
    </ul>
  </div>
`,
})