export default {
  data() {
    return {
      data: null,
      loading: true,
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.data = null;
      fetch(`http://localhost:3000${url}`)
        .then(r => r.json())
        .then(r => {
          setTimeout(() => {
            this.data = r;
            this.loading = false;
          }, 1000)
        });
    }
  }
}