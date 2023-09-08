const express = require('express');
const app = express();
const port = 8080;

app.get('/api/v1/users', (req, res) => {
    const users = [
        { id: 1, name: 'Thanh Tung' },
        { id: 2, name: 'User 2' },
        // Thêm dữ liệu người dùng khác nếu cần
    ];

    res.json(users);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
