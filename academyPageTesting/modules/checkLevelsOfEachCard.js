export async function checkLevelsOfEachCard(val, t) {
  switch (val) {
    case 'Beginner':
      await t.expect(val).eql('Beginner');
      break;
    case 'Intermediate':
      await t.expect(val).eql('Intermediate');
      break;
    case 'Advanced':
      await t.expect(val).eql('Advanced');
      break;
    default:
      break;
  }
}
