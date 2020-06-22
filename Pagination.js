class Pagination {
    constructor({ data, page, limit }) {
        this.data = data
        this.page = Number(page)
        this.limit = Number(limit)

        this.pages = this.calculatePages()
        this.data = this.paginateDate()
    }

    calculatePages() {
        let pages = this.data.length / this.limit
        if (this.data.length % this.imit != 0) pages++
        return pages
    }

    paginateDate() {
        let start = (this.page - 1) * this.limit
        let end = start + this.limit
        return this.data.slice(start, end)
    }
}

module.exports = Pagination