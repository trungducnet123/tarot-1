<template>
    <div class="meanings">
        <div class="meanings__page">
            <div class="meanings__header">
                <input type="text" class="search" v-model="searchText" v-on:input="searchTextChanged" placeholder="tìm kiếm...">
            </div>
            
            <div class="meanings__inner">
                <div class="meanings__card">
                    <tarot-card
                        v-bind:card="card"
                        v-bind:reversed="isReversed"
                        v-bind:size="size"
                        v-on:reverse="reverse"
                    ></tarot-card>
                    <div class="meanings__reverse-instruction" v-if="card">nhấp để dảo ngược</div>
                </div>

                <div class="search-instructions" v-if="!card">
                    <p>bắt đầu bằng cách nhập tên lá bài tarot của bạn vào thanh tìm kiếm ở trên.</p>     
                </div>

                <div class="card-details" v-if="card">
                    <h2 class="card-details__title">
                        {{ card.name }} <span class="card-details__reversed" v-if="isReversed">(reversed)</span>
                    </h2>
                    <p class="card-details__meaning" v-for="meaning in meanings">{{ meaning }}</p>
                </div>
            </div>

            <div class="meanings__next" v-if="card" v-on:click="scrollToNextPage($event)">
                <icon name="chevron-down"></icon>
            </div>
        </div>
		
        <div class="meanings__page meanings__page--information" v-if="card">
		
			
            <div class="information" v-if="card.element">
                <div class="information__header">Nguyên tố</div>
                <div class="information__text">{{ card.element }}</div>
            </div> 
            <div class="information" v-if="card.archetype">
                <div class="information__header">Nguyên mẫu</div>
                <div class="information__text">{{ card.archetype }}</div>
            </div> 
			<div class="information" v-if="card.affirmation">
                <div class="information__header">Hình Ảnh Lá Bài</div>
                <div class="information__text"><img v-bind:reversed="isReversed" v-on:reverse="reverse" :src="`https://dich.kabala.vn/tarot/cards/${card.img}`"></div>
            </div> 
            <div class="information" v-if="card.affirmation">
                <div class="information__header">Khẳng định</div>
                <div class="information__text">{{ card.affirmation }}</div>
            </div> 
            <div class="information" v-if="card.hebrewAlphabet">
                <div class="information__header">Bảng chữ cái Hebrew</div>
                <div class="information__text">{{ card.hebrewAlphabet }}</div>
            </div> 
            <div class="information" v-if="card.numerology">
                <div class="information__header">Số học</div>
                <div class="information__text">{{ card.numerology }}</div>
            </div> 

            <div class="information" v-if="card.questions">
                <div class="information__header">Câu hỏi</div>
                <div class="information__list">
                    <div class="information__text information__text--question" v-for="question in card.questions">{{ question }}</div>
                </div>
            </div> 
            <div class="spacer"></div>
            <div class="information" v-if="card">
                <div class="information__header">Liên kết</div>
                <div class="information__list">
                    <a v-bind:href="kabalaLink" class="information__text information__text--link" target="_blank">{{ cleanURL(kabalaLink) }}</a>
                    <a v-bind:href="labyrinthosLink" class="information__text information__text--link" target="_blank">{{ cleanURL(labyrinthosLink) }}</a>
                    <a v-bind:href="biddyLink" class="information__text information__text--link" target="_blank">{{ cleanURL(biddyLink) }}</a>
                    <a v-bind:href="busterBensonLink" class="information__text information__text--link" target="_blank">busterbenson.com</a>
                </div>
            </div> 
        </div>

		<div v-else style="padding: 15px;">
		<p><strong><a href="https://tarot.kabala.vn/" aria-invalid="true">Tarot</a></strong> l&agrave; một hệ thống b&agrave;i b&oacute;i to&aacute;n gồm 78 l&aacute; b&agrave;i, được sử dụng để giải m&atilde; tương lai, hiểu r&otilde; bản th&acirc;n v&agrave; kh&aacute;m ph&aacute; những tiềm năng ẩn chứa b&ecirc;n trong mỗi người. Mỗi l&aacute; b&agrave;i trong bộ Tarot mang một h&igrave;nh ảnh, biểu tượng v&agrave; &yacute; nghĩa ri&ecirc;ng, gi&uacute;p người đọc c&oacute; thể đưa ra những dự đo&aacute;n, lời khuy&ecirc;n v&agrave; g&oacute;c nh&igrave;n s&acirc;u sắc về c&aacute;c vấn đề trong cuộc sống.</p>
		<p><strong><span style="text-decoration: underline;">Tarot</span> được sử dụng trong nhiều mục đ&iacute;ch kh&aacute;c nhau:</strong></p>
		<ul>
		<li><strong>Dự đo&aacute;n tương lai:</strong> Cung cấp c&aacute;i nh&igrave;n về những khả năng v&agrave; xu hướng tương lai.</li>
		<li><strong>Tư vấn v&agrave; định hướng:</strong> Gi&uacute;p người hỏi t&igrave;m hiểu v&agrave; giải quyết c&aacute;c vấn đề trong cuộc sống, từ t&igrave;nh cảm, c&ocirc;ng việc đến sức khỏe v&agrave; t&agrave;i ch&iacute;nh.</li>
		<li><strong>Ph&aacute;t triển bản th&acirc;n:</strong> Kh&aacute;m ph&aacute; bản th&acirc;n, nhận diện những điểm mạnh, điểm yếu v&agrave; tiềm năng ẩn chứa.</li>
		</ul>
		<p>Tarot kh&ocirc;ng chỉ l&agrave; c&ocirc;ng cụ để dự đo&aacute;n m&agrave; c&ograve;n l&agrave; phương tiện gi&uacute;p con người kết nối với t&acirc;m hồn, trực gi&aacute;c v&agrave; nguồn năng lượng vũ trụ.</p>
		</div>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue'
    import Fuse from 'fuse.js'

    import TarotCard from '../components/TarotCard.vue'
    import Icon from '../components/Icon.vue'

    import { Card, Suit } from '../models/card'
    import { Size } from '../models/size'

    export default Vue.extend({
        data() {
            return {
                searchText: '',
                card: null as Card,
                isReversed: false,
                suggestions: [],

                size: Size.Large as Size,
            }
        },
        methods: {
            searchTextChanged: function(event) {
                const options = {
                    ignoreLocation: true,
                    useExtendedSearch: true,
                    keys: [
                        'searchKey'
                    ]
                }

                const fuse = new Fuse(this.$store.state.cards, options)

                this.suggestions = fuse.search(this.searchText)

                if(this.suggestions.length) {
                    this.card = this.suggestions[0].item
                }
            },
            reverse: function() {
                this.isReversed = !this.isReversed
            },
            scrollToNextPage(event) {
                let next = event.target.closest('.meanings__page').nextElementSibling

                if(next) {
                    next.scrollIntoView({
                        block: 'start',
                        behavior: 'smooth',
                    })
                }
            },
            updateTitle() {
                if(this.card) {
                    window.history.replaceState({}, document.title, '/#/meanings/' + this.card.id + (this.isReversed ? '-r' : ''))
                    document.title = this.$store.getters.pageTitle(this.card.name + (this.isReversed ? ' (reversed)' : ''))
                }
            },
            cleanURL(urlString) {
                let url = new URL(urlString)

                let host = url.host.replace(/^www\./, '')

                return host
            }
        },
        created: function() {
            let params = this.$route.params

            if(params.id) {
                let parts = params.id.split('-')

                let first = parts[0].toLowerCase()
                let card = this.$store.state.cards.find(card => card.id == first)

                if(card) {
                    this.card = card
                }
                
                if(parts.length > 1 && parts[1] == 'r') {
                    this.isReversed = true
                }
            }
        },
        watch: {
            card: function(current, previous) {
                if(current) {
                   this.updateTitle()
                }
            },
            isReversed: function(current, previous) {
                this.updateTitle()
            }
        },
        computed: {
            meanings: function() {
                return this.card.meanings[this.isReversed ? 'reversed' : 'upright']
            },
			kabalaLink: function() {
                let name = this.card.name

                name = name.replace(/^[Tt]he\s*/, '')

                let slug = name.toLowerCase().split(/\s+/).join('-')

                return `https://hoc.kabala.vn/${slug}/`

            },
            labyrinthosLink: function() {
                let name = this.card.name
                if(name == 'Wheel of Fortune') name = 'The ' + name // labyrinthos link for WoF has 'The'

                let slug = name.toLowerCase().split(/\s+/).join('-')

                return `https://labyrinthos.co/blogs/tarot-card-meanings-list/${slug}-meaning-${this.card.isMajorArcana() ? 'major-arcana-' : ''}tarot-card-meanings`
            },
            biddyLink: function() {
                let name = this.card.name

                name = name.replace(/^[Tt]he\s*/, '')

                let slug = name.toLowerCase().split(/\s+/).join('-')

                if(this.card.isMajorArcana()) {
                    return `https://www.biddytarot.com/tarot-card-meanings/major-arcana/${slug}/`
                } else {
                    return `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-${this.card.suitName().toLowerCase()}/${slug}/`
                }

            },
            busterBensonLink: function() {
                let suit = this.card.suitName().toLowerCase()
                if(this.card.suit == Suit.Pentacles) {
                    suit = 'coins'
                }

                let slug = `${this.card.isMajorArcana() ? 'major' : suit }-${this.card.number.toString().padStart(2, '0')}`

                return `https://notes.busterbenson.com/tarot/${slug}`
            }
        },
        components: {
            TarotCard,
            Icon,
        }
    })
</script>

<style lang="scss">
    .meanings {
        display: flex;
        flex-direction: column;
    }

    .meanings__page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;

        &.meanings__page--information {
            padding: 50px 25px;
        }
    }

    .meanings__inner {
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (min-width: $breakpoint-sm) {
            flex-direction: row;
        }
    }

    .meanings__card {
        padding: 10px;

        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: $breakpoint-sm) {
            padding-left: 50px;
        }

        @media (min-width: $breakpoint-lg) {
            padding-left: 125px;
        }

        @media (min-width: $breakpoint-xl) {
            padding-left: 300px;
        }
    }

    .meanings__reverse-instruction {
        position: absolute;
        bottom: -10px;
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--color-mid);

        @media (min-width: $breakpoint-lg) {
            bottom: 15px;
        }

        @media (min-width: $breakpoint-xl) {
            bottom: 30px;
        }
    }

    .card-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        @media (min-width: $breakpoint-sm) {
            align-items: flex-start;
        }

        .card-details__reversed {
            color: var(--color-mid);
        }

        .card-details__meaning {
            margin: 5px 0;
        }
    }

    .search-instructions {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        @media (min-width: $breakpoint-sm) {
            align-items: flex-start;
        }
    }

    .meanings__header {
        padding: 20px;
        display: flex;
        flex-direction: column;
        background: var(--color-bg);
        // position: sticky;
        // top: 0;
        border-bottom: 1px solid var(--color-fg);
        z-index: 10;

        @media (min-width: $breakpoint-lg) {
            flex-direction: row;
            justify-content: flex-end;
            border-bottom: none;
        }
    }

    .search {
        // position: fixed;
        // top: 10px;
        // right: 10px;
        padding: 2px 20px;
        padding-top: 5px;
        font-size: 1rem;
        font-family: $font-mono;
        border: 1px solid var(--color-fg);
        background: transparent;
        outline: none;
        color: var(--color-fg);

        &::placeholder {
            text-align: center;
            color: var(--color-mid);
        }
    }

    .meanings__next {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 50px;
        display: none;
        cursor: pointer;

        .icon {
            color: var(--color-mid);
        }

        @media (min-width: $breakpoint-sm) {
            display: block;
        }

        &:hover {
            .icon {
                color: var(--color-fg);
            }
        }
    }

    .information {
        padding: 40px 0;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;

        .information__header {
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.1rem;
            color: var(--color-mid);
            margin-bottom: 10px;
        }

        .information__text {
            font-size: 1.1rem;
            // text-transform: lowercase;
        }

        .information__list {
            display: flex;  
            flex-direction: column;
        }

        .information__text--question {
            padding: 10px 0;
            padding-top: 15px;

            border-top: 1px solid var(--color-mid);

            &:first-of-type {
                border-top: none;
            }
        }

        .information__text--link {
            color: var(--color-fg);
            text-decoration: underline;
            word-break: break-all;
            margin-bottom: 10px;
        }
    }

    .spacer {
        flex-grow: 1;
    }
	img[reversed="reversed"] {
		transform: scaleY(-1);
	}
</style>