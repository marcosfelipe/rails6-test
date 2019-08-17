class HighScore < ApplicationRecord
  validates_presence_of :game, :score
end
