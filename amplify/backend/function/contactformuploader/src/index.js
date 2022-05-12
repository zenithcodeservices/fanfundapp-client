const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.name.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S
      const candidateContent = streamedItem.dynamodb.NewImage.content.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: 'Candidate Submission' },
              Body: {
                Text: { Data: `My name is ${candidateName}. You can reach me at ${candidateEmail}. Here is my concern:\n\n\n${candidateContent}` },
              },
            },
          })
          .promise()

      await ses
          .sendTemplatedEmail({
            Destination: {
              ToAddresses: [`${candidateEmail}`],
            },
            Source: process.env.SES_EMAIL_SOURCE,
            Template: "hello_world_template2",
            TemplateData: '{ \"REPLACEMENT_TAG_NAME\":\"REPLACEMENT_VALUE\" }', /* required */
          })
          .promise()
    }
  }
  return { status: 'done' }
}
