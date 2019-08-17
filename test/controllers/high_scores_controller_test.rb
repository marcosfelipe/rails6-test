require 'test_helper'

class HighScoresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @high_score = high_scores(:one)
  end

  test "should get index" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 2" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 3" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 4" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 5" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 6" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 7" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 8" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 9" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 10" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 11" do
    get high_scores_url
    assert_response :success
  end

  test "should get index 12" do
    get high_scores_url
    assert_response :success
  end

  test "should get new 13" do
    get new_high_score_url
    assert_response :success
  end

  test "should create high_score" do
    assert_difference('HighScore.count') do
      post high_scores_url, params: { high_score: { game: @high_score.game, score: @high_score.score } }
    end

    assert_redirected_to high_score_url(HighScore.last)
  end

  test "should show high_score" do
    get high_score_url(@high_score)
    assert_response :success
  end

  test "should get edit" do
    get edit_high_score_url(@high_score)
    assert_response :success
  end

  test "should update high_score" do
    patch high_score_url(@high_score), params: { high_score: { game: @high_score.game, score: @high_score.score } }
    assert_redirected_to high_score_url(@high_score)
  end

  test "should destroy high_score" do
    assert_difference('HighScore.count', -1) do
      delete high_score_url(@high_score)
    end

    assert_redirected_to high_scores_url
  end
end
