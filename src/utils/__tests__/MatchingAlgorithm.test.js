import MatchingAlgorithm from '../MatchingAlgorithm'

describe('MatchingAlgorithm', () => {
  it('matches skills correctly', () => {
    const result = MatchingAlgorithm.matchSkills(
      [{ name: 'Directing' }, { name: 'Editing' }],
      ['Directing', 'Writing']
    )
    expect(result).toBeCloseTo(0.5)
  })

  it('matches location with remote', () => {
    expect(MatchingAlgorithm.matchLocation('Los Angeles, CA', 'Remote', true)).toBe(1.0)
  })

  it('matches experience levels', () => {
    expect(MatchingAlgorithm.matchExperience('Expert', 'Intermediate')).toBe(1.0)
    expect(MatchingAlgorithm.matchExperience('Beginner', 'Expert')).toBe(0.4)
  })

  it('handles empty required skills', () => {
    expect(MatchingAlgorithm.matchSkills([], [])).toBe(0.5)
  })
})
