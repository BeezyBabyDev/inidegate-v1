// IndieGate.io Smart Matching Algorithm
// AI-powered compatibility scoring for talent-project and investor-talent matches

export class MatchingAlgorithm {
  constructor() {
    this.weights = {
      // Core matching factors
      skills: 0.3,
      location: 0.15,
      experience: 0.2,
      availability: 0.1,
      budget: 0.15,
      genre: 0.1,

      // Bonus factors
      verification: 0.05,
      urgency: 0.03,
      track_record: 0.07,
      network_connections: 0.05,
    }
  }

  // Main matching function for talent seeking projects
  calculateTalentProjectMatch(talentProfile, projectOpportunity) {
    let score = 0
    const reasons = []

    // 1. Skills Matching (30% weight)
    const skillsScore = this.matchSkills(
      talentProfile.skills,
      projectOpportunity.requirements?.skills || []
    )
    score += skillsScore * this.weights.skills
    if (skillsScore > 0.8)
      reasons.push(
        `Perfect skill match: ${this.getTopSkillMatch(talentProfile.skills, projectOpportunity.requirements?.skills)}`
      )
    else if (skillsScore > 0.6) reasons.push(`Strong skill alignment`)

    // 2. Location Matching (15% weight)
    const locationScore = this.matchLocation(
      talentProfile.location,
      projectOpportunity.location,
      talentProfile.remoteWork
    )
    score += locationScore * this.weights.location
    if (locationScore > 0.9) reasons.push(`Perfect location match: ${projectOpportunity.location}`)
    else if (locationScore > 0.7) reasons.push(`Location compatibility`)

    // 3. Experience Matching (20% weight)
    const experienceScore = this.matchExperience(
      talentProfile.experience,
      projectOpportunity.requirements?.experience
    )
    score += experienceScore * this.weights.experience
    if (experienceScore > 0.8) reasons.push(`Experience level alignment`)

    // 4. Availability Matching (10% weight)
    const availabilityScore = this.matchAvailability(
      talentProfile.availability,
      projectOpportunity.startDate
    )
    score += availabilityScore * this.weights.availability
    if (availabilityScore > 0.8) reasons.push(`Available during production window`)

    // 5. Budget/Rate Matching (15% weight)
    const budgetScore = this.matchBudgetToRate(talentProfile.rates, projectOpportunity.budget)
    score += budgetScore * this.weights.budget
    if (budgetScore > 0.8) reasons.push(`Budget-rate compatibility`)

    // 6. Genre Preference (10% weight)
    const genreScore = this.matchGenre(talentProfile.preferredGenres, projectOpportunity.genre)
    score += genreScore * this.weights.genre
    if (genreScore > 0.8) reasons.push(`Genre preference match`)

    // Bonus factors
    if (talentProfile.verified && projectOpportunity.verified) {
      score += this.weights.verification
      reasons.push(`Both parties verified`)
    }

    if (talentProfile.unions?.includes('SAG-AFTRA') && projectOpportunity.requirements?.union) {
      score += 0.05
      reasons.push(`SAG-AFTRA membership`)
    }

    return {
      score: Math.min(Math.round(score * 100), 99), // Cap at 99% for realism
      reasons: reasons.slice(0, 5), // Top 5 reasons
      compatibility: this.getCompatibilityLevel(score),
      urgency: projectOpportunity.urgency || 'medium',
    }
  }

  // Main matching function for investors seeking talent
  calculateInvestorTalentMatch(investorProfile, talentProfile) {
    let score = 0
    const reasons = []

    // 1. Budget Alignment (25% weight)
    const budgetScore = this.matchInvestmentRange(
      investorProfile.investmentRange,
      talentProfile.seekingFunding
    )
    score += budgetScore * 0.25
    if (budgetScore > 0.8) reasons.push(`Budget range alignment (${talentProfile.seekingFunding})`)

    // 2. Genre Preference (20% weight)
    const genreScore = this.matchGenre(investorProfile.preferredGenres, talentProfile.genre)
    score += genreScore * 0.2
    if (genreScore > 0.8)
      reasons.push(
        `Genre preference match: ${this.getCommonGenres(investorProfile.preferredGenres, talentProfile.genre).join(', ')}`
      )

    // 3. Track Record & ROI Potential (25% weight)
    const trackRecordScore = this.evaluateTrackRecord(
      talentProfile.achievements,
      talentProfile.credits
    )
    score += trackRecordScore * 0.25
    if (trackRecordScore > 0.8) reasons.push(`Strong festival track record`)
    else if (trackRecordScore > 0.6) reasons.push(`Proven project completion`)

    // 4. Location & Network (15% weight)
    const locationScore = this.matchLocation(investorProfile.location, talentProfile.location, true)
    score += locationScore * 0.15
    if (locationScore > 0.8) reasons.push(`${talentProfile.location} location`)

    // 5. Investment Stage Preference (15% weight)
    const stageScore = this.matchInvestmentStage(
      investorProfile.investmentStage,
      talentProfile.projectStage
    )
    score += stageScore * 0.15
    if (stageScore > 0.8) reasons.push(`Investment stage alignment`)

    // Bonus factors
    if (talentProfile.verified) {
      score += 0.05
      reasons.push(`Verified filmmaker`)
    }

    if (talentProfile.distributionConnections) {
      score += 0.05
      reasons.push(`Distribution connections`)
    }

    return {
      score: Math.min(Math.round(score * 100), 99),
      reasons: reasons.slice(0, 5),
      compatibility: this.getCompatibilityLevel(score),
      roiPotential: this.estimateROIPotential(talentProfile),
    }
  }

  // Helper Methods
  matchSkills(talentSkills = [], requiredSkills = []) {
    if (!requiredSkills.length) return 0.5 // Neutral if no requirements

    const matches = requiredSkills.filter(required =>
      talentSkills.some(
        talent =>
          talent.name?.toLowerCase().includes(required.toLowerCase()) ||
          required.toLowerCase().includes(talent.name?.toLowerCase())
      )
    )

    return Math.min(matches.length / requiredSkills.length, 1.0)
  }

  getTopSkillMatch(talentSkills = [], requiredSkills = []) {
    const match = requiredSkills.find(required =>
      talentSkills.some(
        talent =>
          talent.name?.toLowerCase().includes(required.toLowerCase()) && talent.level === 'Expert'
      )
    )
    return match || requiredSkills[0] || 'Core Skills'
  }

  matchLocation(talentLocation, projectLocation, isRemote = false) {
    if (isRemote || projectLocation?.toLowerCase().includes('remote')) return 1.0

    const talentCity = talentLocation?.split(',')[0]?.trim().toLowerCase()
    const projectCity = projectLocation?.split(',')[0]?.trim().toLowerCase()

    if (talentCity === projectCity) return 1.0

    // Major film hubs get bonus compatibility
    const filmHubs = ['los angeles', 'new york', 'atlanta', 'vancouver', 'toronto']
    if (filmHubs.includes(talentCity) && filmHubs.includes(projectCity)) return 0.8

    return 0.3 // Different locations but possible
  }

  matchExperience(talentExp, requiredExp) {
    const expLevels = { beginner: 1, intermediate: 2, advanced: 3, expert: 4 }
    const talentLevel = expLevels[talentExp?.toLowerCase()] || 2
    const requiredLevel = expLevels[requiredExp?.toLowerCase()] || 2

    if (talentLevel >= requiredLevel) return 1.0
    if (talentLevel === requiredLevel - 1) return 0.7
    return 0.4
  }

  matchAvailability(talentAvailability, _projectStartDate) {
    if (talentAvailability?.toLowerCase().includes('available')) return 1.0
    if (talentAvailability?.toLowerCase().includes('flexible')) return 0.8
    return 0.5
  }

  matchBudgetToRate(talentRates, projectBudget) {
    // Simplified budget matching - in reality would be more complex
    if (!talentRates || !projectBudget) return 0.5

    const rateNumber = parseInt(talentRates.replace(/[^0-9]/g, ''))
    const budgetNumber = parseInt(projectBudget.replace(/[^0-9]/g, ''))

    if (budgetNumber >= rateNumber * 20) return 1.0 // Assuming 20 day shoot
    if (budgetNumber >= rateNumber * 15) return 0.8
    if (budgetNumber >= rateNumber * 10) return 0.6
    return 0.3
  }

  matchGenre(preferences = [], projectGenres = []) {
    if (!preferences.length || !projectGenres.length) return 0.5

    const commonGenres = preferences.filter(pref =>
      projectGenres.some(
        genre =>
          genre.toLowerCase().includes(pref.toLowerCase()) ||
          pref.toLowerCase().includes(genre.toLowerCase())
      )
    )

    return Math.min(commonGenres.length / Math.max(preferences.length, projectGenres.length), 1.0)
  }

  getCommonGenres(preferences = [], projectGenres = []) {
    return preferences.filter(pref =>
      projectGenres.some(
        genre =>
          genre.toLowerCase().includes(pref.toLowerCase()) ||
          pref.toLowerCase().includes(genre.toLowerCase())
      )
    )
  }

  matchInvestmentRange(investorRange, seekingAmount) {
    if (!investorRange || !seekingAmount) return 0.5

    const investorMin = parseInt(investorRange.split('-')[0].replace(/[^0-9]/g, ''))
    const investorMax = parseInt(
      investorRange.split('-')[1]?.replace(/[^0-9]/g, '') || investorMin * 10
    )
    const seekingMin = parseInt(seekingAmount.split('-')[0].replace(/[^0-9]/g, ''))
    const seekingMax = parseInt(seekingAmount.split('-')[1]?.replace(/[^0-9]/g, '') || seekingMin)

    if (seekingMin >= investorMin && seekingMax <= investorMax) return 1.0
    if (seekingMin <= investorMax && seekingMax >= investorMin) return 0.8 // Overlap
    return 0.2
  }

  matchInvestmentStage(investorStages = [], projectStage) {
    if (!investorStages.length || !projectStage) return 0.5
    return investorStages.some(
      stage =>
        stage.toLowerCase().includes(projectStage.toLowerCase()) ||
        projectStage.toLowerCase().includes(stage.toLowerCase())
    )
      ? 1.0
      : 0.3
  }

  evaluateTrackRecord(achievements = [], credits = []) {
    let score = 0.5 // Base score

    // Festival achievements boost
    const festivalKeywords = ['sundance', 'cannes', 'sxsw', 'toronto', 'tribeca', 'berlin']
    achievements.forEach(achievement => {
      if (festivalKeywords.some(fest => achievement.toLowerCase().includes(fest))) {
        score += 0.2
      }
    })

    // Multiple completed projects
    if (credits.length >= 5) score += 0.2
    else if (credits.length >= 3) score += 0.1

    return Math.min(score, 1.0)
  }

  estimateROIPotential(talentProfile) {
    const achievements = talentProfile.achievements || []
    const hasAwards = achievements.some(
      a => a.toLowerCase().includes('winner') || a.toLowerCase().includes('award')
    )
    const hasFestival = achievements.some(
      a => a.toLowerCase().includes('sundance') || a.toLowerCase().includes('cannes')
    )

    if (hasFestival) return 'High'
    if (hasAwards) return 'Medium-High'
    return 'Medium'
  }

  getCompatibilityLevel(score) {
    if (score >= 0.9) return 'Excellent'
    if (score >= 0.8) return 'Very Good'
    if (score >= 0.7) return 'Good'
    if (score >= 0.6) return 'Fair'
    return 'Low'
  }

  // Filter and sort matches
  filterMatches(matches, filters) {
    return matches.filter(match => {
      if (filters.location !== 'all' && !match.location.toLowerCase().includes(filters.location))
        return false
      if (
        filters.genre !== 'all' &&
        !match.genre?.some(g => g.toLowerCase().includes(filters.genre))
      )
        return false
      if (filters.budget !== 'all') {
        const budgetRanges = {
          micro: [0, 100000],
          low: [100000, 500000],
          medium: [500000, 2000000],
          high: [2000000, Infinity],
        }
        const range = budgetRanges[filters.budget]
        if (range) {
          const matchBudget = parseInt(match.budget?.replace(/[^0-9]/g, '') || '0')
          if (matchBudget < range[0] || matchBudget > range[1]) return false
        }
      }
      return true
    })
  }

  sortMatches(matches, sortBy = 'score') {
    return matches.sort((a, b) => {
      switch (sortBy) {
        case 'score': {
          return b.matchScore - a.matchScore
        }
        case 'urgency': {
          const urgencyOrder = { high: 3, medium: 2, low: 1 }
          return urgencyOrder[b.urgency] - urgencyOrder[a.urgency]
        }
        case 'budget': {
          const aBudget = parseInt(a.budget?.replace(/[^0-9]/g, '') || '0')
          const bBudget = parseInt(b.budget?.replace(/[^0-9]/g, '') || '0')
          return bBudget - aBudget
        }
        default: {
          return b.matchScore - a.matchScore
        }
      }
    })
  }
}

export default new MatchingAlgorithm()
