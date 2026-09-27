const calculateTotal = require('./math');

test('Kiểm tra tính năng cộng tiền: 20k + 30k phải bằng 50k', () => {
    // Nếu hệ thống trả ra đúng 50, test xanh. Trả ra số khác, test đỏ.
    expect(calculateTotal(20, 30)).toBe(50);
});