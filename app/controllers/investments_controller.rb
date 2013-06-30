class InvestmentsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    @investment = Investment.new(params[:investment])

    respond_to do |format|
      if @investment.save
        format.html { redirect_to @investment, notice: 'Trade was successfully created.' }
        format.json { render json: @investment, status: :created, location: @investment }
      else
        format.html { render action: "new" }
        format.json { render json: @investment.errors, status: :unprocessable_entity }
      end
    end
  end
end
