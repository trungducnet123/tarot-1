<template>
    <div class="settings">
        <div class="content">
            <div class="setting">
                <div class="setting__header">
                    <div class="setting__title">Font chữ</div>
                    <a class="setting__reset" v-on:click="reset('fonts')">(Đặt lại)</a>
                </div>
                <div class="setting__list">
                    <div class="setting__item setting__item--text">
                        <input class="setting__input" type="text" v-model="config.fonts.mono">
                    </div>
                </div>
            </div>

            <div class="setting">
                <div class="setting__header">
                    <div class="setting__title">Màu sắc</div>
                    <a class="setting__reset" v-on:click="reset('colors')">(Đặt lại)</a>
                </div>
                <div class="setting__list">
                    <div class="setting__item setting__item--color">
                        <div class="setting__label">Background</div>
                        <div class="setting__separator"></div>
                        <input class="setting__input" type="color" v-model="config.colors.bg">
                    </div>

                    <div class="setting__item setting__item--color">
                        <div class="setting__label">Midtone</div>
                        <div class="setting__separator"></div>
                        <input class="setting__input" type="color" v-model="config.colors.mid">
                    </div>

                    <div class="setting__item setting__item--color">
                        <div class="setting__label">Foreground</div>
                        <div class="setting__separator"></div>
                        <input class="setting__input" type="color" v-model="config.colors.fg">
                    </div>
                </div>

                <div class="color-themes">
                    <a v-on:click="showColorThemes = !showColorThemes"
                        class="color-themes__toggle">
                        <span v-if="showColorThemes">Ẩn</span>
                        <span v-else>Hiện</span>
                        lựa chọn giao diện
                    </a>

                    <div v-if="showColorThemes" class="color-themes__list">
                        <div class="color-theme" 
                            v-for="theme in $store.state.colorThemes"
                            v-bind:style="{
                                background: theme.colors.bg
                            }"
                            v-on:click="config.colors = { ...theme.colors }"
                        >
                            <span v-bind:style="{ color: theme.colors.fg }"><b>{{ theme.name }}</b></span>
                            <span v-bind:style="{ color: theme.colors.mid }"> - midtone</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="setting">
                <div class="setting__header">
                    <div class="setting__title">Colorize favicon</div>
                    <a class="setting__reset" v-on:click="reset('useColoredFavicon')">(Đặt lại)</a>
                </div>
                <div class="setting__list">
                    <div class="setting__item setting__item--checkbox">
                        <input class="setting__input" type="checkbox" v-model="config.useColoredFavicon">
                    </div>
                </div>
            </div>

            <div class="setting">
                <div class="setting__header">
                    <div class="setting__title">Lưu</div>
                </div>
                <div class="setting__list">
                    <div class="setting__item">
                        <button class="settings__save-button" type="button" v-on:click="save">Lưu tùy chỉnh</button>
                    </div>
                    <div class="settings__save-text" v-if="savedResult != null">
                        <div v-if="savedResult == true">Cài đặt đã lưu thành công!</div>
                        <div v-if="savedResult == false">Lỗi khi lưu cài đặt!</div>
                    </div>
                </div>
            </div> 

            
            
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        beforeRouteLeave(to, from, next) {
            const answer = !this.dirty || window.confirm('You have unsaved changes! Are you sure you want to leave this page without saving?')

            if (answer) {
                this.$store.commit('clearTemporaryConfig')
                next()
            } else {
                next(false)
            }
        },
        data() {
            return {
                dirty: false,
                savedResult: null,
                showColorThemes: false,
                config: {
                    useColoredFavicon: this.$store.state.config.useColoredFavicon,
                    fonts: {
                        mono: this.$store.state.config.fonts.mono,
                    },
                    colors: {
                        bg: this.$store.state.config.colors.bg,
                        mid: this.$store.state.config.colors.mid,
                        fg: this.$store.state.config.colors.fg,
                    }
                },
                defaults: {
                    useColoredFavicon: this.$store.state.config.useColoredFavicon,
                    fonts: {
                        mono: this.$store.state.defaults.fonts.mono,
                    },
                    colors: {
                        bg: this.$store.state.defaults.colors.bg,
                        mid: this.$store.state.defaults.colors.mid,
                        fg: this.$store.state.defaults.colors.fg,
                    }
                },
            }
        },
        created: function() {
            this.$store.commit('setTemporaryConfig', this.config)
        },
        methods: {
            save: async function() {
                console.log('saving')
                this.$store.dispatch('saveConfig', this.config).then(result => {
                    this.savedResult = result
                    this.dirty = false

                    setTimeout(() => {
                        this.savedResult = null
                    }, 3000)
                })

                if(this.config.useColoredFavicon) {
                    window['setFavicon'](this.config.colors.bg, this.config.colors.fg)
                }
            },
            reset: function(setting) {
                let from = this.defaults[setting]

                if(typeof setting == 'object') {
                    for(let key in setting) {
                        this.config[setting][key] = this.defaults[setting][key]
                    }
                } else {
                    this.config[setting] = this.defaults[setting]
                }
            }
        },
        computed: {
            cssVariables: function() {
                return {
                    '--color-bg': this.config.colors.bg,
                    '--color-mid': this.config.colors.mid,
                    '--color-fg': this.config.colors.fg,
                    '--font-mono': this.config.fonts.mono,
                }
            }
        },
        watch: {
            config: {
                deep: true,
                handler: function() {
                    this.dirty = true
                    let c = this.config.colors
                    // outputs current theme, for adding to colorThemes.mjs easily
                    // console.log(`{ name: '', colors: { bg: '${c.bg}', mid: '${c.mid}', fg: '${c.fg}' }},`)

                    if(this.config.useColoredFavicon) {
                        window['setFavicon'](this.config.colors.bg, this.config.colors.fg)
                    } else {
                        window['setFavicon']('transparent', 'black')
                    }
                },
            }
        },
        components: {

        }
    })
</script>

<style lang="scss">
    .setting {
        padding: 40px 0;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;

        .setting__header {
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.1rem;
            color: var(--color-mid);
            margin-bottom: 10px;

            display: flex;
            flex-direction: row;
            align-items: center;

            .setting__reset {
                margin-left: 10px;
                font-size: 0.6rem;
                cursor: pointer;

                background: white;
                color: black;
                padding: 2px 6px;
                padding-top: 4px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .setting__list {
            display: flex;  
            flex-direction: column;
        }

        .setting__item {
            padding-bottom: 10px;
        }
    }


.setting__item--text {
    display: flex;
    flex-direction: column;

    .setting__input {
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
}

.setting__item--color {
    display: flex;
    flex-direction: row;
    align-items: center;

    .setting__label {
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        color: var(--color-mid);
    }

    .setting__separator {
        height: 1px;
        margin: 0 20px;
        background: var(--color-mid);
        flex-grow: 1;
        flex-shrink: 0;
    }

    .setting__input {
        border: 1px solid black;
        outline: 1px solid white;
        background: none;
        padding: 0;
        height: auto;
        width: auto;

        // doesn't work if i use comma separated selectors???
        &::-webkit-color-swatch {
            border: none;
            padding: 20px;
        }

        &::-moz-color-swatch {
            border: none;
            padding: 20px;
        }

        &::-moz-color-swatch-wrapper {
            padding: 0;
        }

        &::-webkit-color-swatch-wrapper {
            padding: 0;
        }
    }
}

.setting__item--checkbox {
    .setting__input {
        margin: 0;
        appearance: none;
        border: 1px solid var(--color-mid);
        width: 30px;
        height: 30px;
        position: relative;
        cursor: pointer;

        &:checked {
            &:after {
                position: absolute;
                content: '';
                display: block;
                top: 3px;
                bottom: 3px;
                left: 3px;
                right: 3px;
                background: var(--color-fg);
                z-index: 1;
            }
        }
    }
}

.settings__save-button {
    appearance: none;
    background: white;
    color: black;
    border: 1px solid black;
    outline: none;
    font-family: var(--font-mono);
    text-transform: uppercase;
    padding: 2px 10px;
    padding-top: 4px;
}

.color-themes__toggle {
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    color: var(--color-mid);
    text-decoration: underline;
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 10px;
    display: block;

    &:hover {
        font-weight: bold;
    }
}

.color-themes__list {
    display: flex;
    flex-direction: column;
}

.color-theme {
    padding: 10px 20px;
    margin-bottom: 2px;
    cursor: pointer;

    &:hover {
        // font-style: italic;
        font-weight: bold;

        b {
            font-style: italic;
        }
    }
}
</style>