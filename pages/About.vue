<template>
    <div class="about">
        <div class="content prose">
            <h2>Kabala TAROT</h2>
			<p>
				Kabala TAROT là một phần của <a href="https://kabala.vn">Kabala</a> - là một dự án hỗ trợ mọi người vững bước đi trên con đường tâm linh, giúp mọi người hiểu được chính mình cũng như biết được mình muốn gì.
			
			</p>
			<p>
				Dự án gồm rất nhiều những lời khuyên và trải nghiệm huyền học (các thuật xem số mệnh) từ Đông Phương đến Tây Phương: Tử vi, Chiêm tinh, Kinh dịch, Thần số học, Tâm lý học, Nhịp sinh học, MBTI, Tarot, Enneagram...
			</p>
			<p>
				Sử dụng Kabala TAROT sẽ rất hữu ích nếu bạn xây dựng cho mình một tấm lòng hướng thiện và một nền tảng tư duy vững chắc! Chúc bạn vững bước trên con đường tu dưỡng!
			</p>

            <hr>
			<p>
				Special thanks to <a href="https://cesque.com">cesque</a> for building this Tarot system and providing it to the community.
            <p>
                The tarot card data used on this site is modified from <a href="https://github.com/equokka/tarot-json">tarot-json</a> by <b>equokka</b>, under the <a href="https://github.com/equokka/tarot-json/blob/master/LICENSE">MIT License</a>.
            </p>

            <p>
                <b>Settings</b> icon by <b>i cons</b> from the Noun Project.
            </p>

            <p>
                <b>Help</b> icon by <b>Shiva</b> from the Noun Project
            </p>
            <p>
                <b>Cards</b> by <b>Dmitriy Ivanov</b> from the Noun Project
            </p>

            <hr> 
						<p>
				Tìm hiểu thêm về các dự án thuộc Kabala: <a href="https://go.mzg.vn/kabala">https://go.mzg.vn/kabala</a>
			</p>
            <!--<p>
                Site version: <b>{{ siteVersion }}</b>
            </p>-->
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                siteVersion: this.$store.state.siteVersion,
            }
        },
        methods: {

        },
        components: {

        }
    })
</script>

<style lang="scss">
    .prose {
        a {
            color: var(--color-mid);
        }

        hr {
            margin: 40px 0;
            border: none;
            border-bottom: 1px solid var(--color-mid);
        }

        b {
            color: var(--color-mid);
        }
    }

</style>