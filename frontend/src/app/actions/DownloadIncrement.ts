const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({
    region: 'eu-west-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const incrementDownloadTotal = async () => {
    try {
        const res = await dynamodb.updateItem({
            TableName: 'downloads',
            Key: { 'download_total': { N: '1' } },
            UpdateExpression: 'SET download_total = download_total + :val',
            ExpressionUpdateValues: { ':val': { N: '1' } },
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(res)
        }
    } catch (error: any) {
        return {
            statusCode: 500,
            body: JSON.stringify(error.message),
        }
    }
}

export const getDownloadTotal = async () => {
    try {
        const res = await dynamodb.getItem({
            TableName: 'downloads',
            Key: { 'download_total': { N: '1' } },
        }).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(res)
        }
    } catch (error: any) {
        return {
            statusCode: 500,
            body: JSON.stringify(error.message),
        }
    }
}
