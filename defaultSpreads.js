import { Spread, SpreadCard } from './models/spread'

function slugify(text) {
    text = text.replace(/\s/g, '-')
    text = text.replace(/[^\w-]/g, '')
    text = text.toLowerCase()

    return text
}

function simpleNCardSpreadGenerator(cards, group) {
    let spread = {
        id: slugify(cards.join(' ')),
        group: group,
        // name: `${card1}, ${card2} &</i> ${card3}`,
        cards: cards.map((card, index) => {
            return {
                number: index + 1,
                name: card,
                position: {
                    x: index + 1,
                    y: 1,
                },
            }
        })
    }

    return spread
}

let threeCardSpreads = [
    ['Quá khứ hiện tại tương lai'],
     ['Bản chất', 'Nguyên nhân', 'Giải pháp'],
     ['Tình hình hiện tại', 'Trở ngại', 'Lời khuyên'],
     ['Tình huống', 'Hành động', 'Kết quả'],
     ['Bối cảnh', 'Nơi cần tập trung', 'Kết quả'],
     ['Điều tôi nghĩ', 'Điều tôi cảm thấy', 'Điều tôi làm'],
].map(a => simpleNCardSpreadGenerator(a))

let spreads = []

spreads.push(simpleNCardSpreadGenerator(['Quá khứ hiện tại tương lai']))
spreads.push(simpleNCardSpreadGenerator(['Bản chất', 'Nguyên nhân', 'Giải pháp']))
spreads.push(simpleNCardSpreadGenerator(['Tình hình hiện tại', 'Trở ngại', 'Lời khuyên']))
spreads.push(simpleNCardSpreadGenerator(['Tình huống', 'Hành động', 'Kết quả']))
spreads.push(simpleNCardSpreadGenerator(['Bối cảnh', 'Nơi cần tập trung', 'Kết quả']))
spreads.push(simpleNCardSpreadGenerator(['Những gì tôi nghĩ', 'những gì tôi cảm thấy', 'những gì tôi làm']))

spreads.push(simpleNCardSpreadGenerator(['Nơi bạn đang đứng bây giờ', 'Điều bạn khao khát', 'Làm thế nào để đạt được điều đó']))
spreads.push(simpleNCardSpreadGenerator(['Điều bạn khao khát', 'Điều gì đang cản đường bạn', 'Làm thế nào bạn có thể vượt qua điều này']))
spreads.push(simpleNCardSpreadGenerator(['Điều gì sẽ giúp bạn', 'Điều gì sẽ cản trở bạn', 'Tiềm năng chưa được thực hiện của bạn là gì']))

spreads.push(simpleNCardSpreadGenerator(['Điều bạn có thể thay đổi', 'Điều bạn không thể thay đổi', 'Điều bạn có thể không biết']))
spreads.push(simpleNCardSpreadGenerator(['Điều gì hoạt động tốt', 'Điều gì không hoạt động tốt', 'Bài học chính']))

spreads.push(simpleNCardSpreadGenerator(['Điểm mạnh', 'Điểm yếu', 'Lời khuyên']))
spreads.push(simpleNCardSpreadGenerator(['Cơ hội', 'Thách thức', 'Kết quả']))
spreads.push(simpleNCardSpreadGenerator(['Phương án 1', 'Phương án 2', 'Phương án 3']))
spreads.push(simpleNCardSpreadGenerator(['Phương án 1', 'Phương án 2', 'Những điều bạn cần biết để đưa ra quyết định']))
spreads.push(simpleNCardSpreadGenerator(['Một giải pháp', 'Một giải pháp thay thế', 'Cách chọn']))

function simple3CardBalancedGenerator(card1, card2, card3) {
    return {
        id: slugify(`${card1} ${card2} ${card3}`),
        // name: `Balanced Spread`,
        group: 'Balanced',
        cards: [
            {
                number: 1,
                name: card1,
                position: {
                    x: 2,
                    y: 1,
                },
            },
            {
                number: 2,
                name: card2,
                rotation: 225,
                position: {
                    x: 1,
                    y: 2,
                },
            },
            {
                number: 3,
                name: card3,
                rotation: 135,
                position: {
                    x: 3,
                    y: 2,
                },
            }
        ]
    }
}

spreads.push(simple3CardBalancedGenerator('Tâm trí', 'Cơ thể', 'Linh hồn'))
spreads.push(simple3CardBalancedGenerator('Trạng thái vật lý', 'Trạng thái cảm xúc', 'Trạng thái tinh thần'))
spreads.push(simple3CardBalancedGenerator('Tiềm thức', 'Có ý thức', 'Siêu ý thức'))
spreads.push(simple3CardBalancedGenerator('Lựa chọn 1', 'Tùy chọn 2', 'Tùy chọn 3'))
spreads.push(simple3CardBalancedGenerator('Tôi nghĩ gì', 'Tôi cảm thấy gì', 'Tôi làm gì'))

spreads.push({
    id: slugify(`single card reading`),
    name: `Chọn 1 lá Tarot`,
    cards: [
        {
            number: 1,
            name: 'Card',
            position: {
                x: 1,
                y: 0,
            },
        }
    ]
})

function simple2CardCrossGenerator(card1, card2) {
    return {
        id: slugify(`${card1}, ${card2}`),
        group: `Cross`,
        cards: [
            {
                number: 1,
                name: card1,
                position: {
                    x: 1,
                    y: 1,
                },
            },
            {
                number: 2,
                name: card2,
                position: {
                    x: 1,
                    y: 1,
                },
                rotation: 90,
                layer: 1,
            }
        ]
    }
}

spreads.push(simpleNCardSpreadGenerator(['Tình huống', 'Lời khuyên']))
spreads.push(simpleNCardSpreadGenerator(['Có', 'Không']))
spreads.push(simpleNCardSpreadGenerator(['Lựa chọn 1', 'Tùy chọn 2']))
spreads.push(simpleNCardSpreadGenerator(['Chấp nhận', 'Từ chối']))

spreads.push(simple2CardCrossGenerator('Tình huống', 'Thử thách'))
spreads.push(simple2CardCrossGenerator('Mục đích', 'Tắc nghẽn'))
spreads.push(simple2CardCrossGenerator('Chặn', 'Giải pháp'))
spreads.push(simple2CardCrossGenerator('Lý tưởng', 'Giải quyết cho'))
spreads.push(simple2CardCrossGenerator('Tình huống', 'Thông tin bổ sung'))
spreads.push(simple2CardCrossGenerator('Querent', 'Adversary'))

spreads.push(simpleNCardSpreadGenerator(['Tích cực', 'Tiêu cực', 'Kết quả', 'Lời khuyên']))

module.exports = spreads.map(spread => Spread.fromObject(spread))