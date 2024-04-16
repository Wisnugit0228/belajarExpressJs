const respon = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        payload: {
            statusCode: statusCode,
            datas : data,
            message : message
        },
        pagination: {
            prev : "",
            next :""
        }

    })
}

module.exports = respon