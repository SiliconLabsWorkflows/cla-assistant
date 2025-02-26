import * as input from './getInputs'

export function getPrSignComment() {
  const prSignComment = 
    "I have read the CLA Document and I hereby sign the CLA behalf on myself, e-mail: example@example.com\n\n" + 
    "or\n\n" +
    "I have read the CLA Document and I hereby sign the CLA behalf of my company, e-mail: example@example.com\n\n" + 
    "Signature is valid for 6 months."
  return input.getCustomPrSignComment() || prSignComment
}
