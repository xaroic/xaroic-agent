use anchor_lang::prelude::*;

declare_id!("XAR111111111111111111111111111111111111");

#[program]
pub mod registry {
    use super::*;

    pub fn register_agent(
        _ctx: Context<RegisterAgent>,
        name: String,
    ) -> Result<()> {
        msg!("Registered {}", name);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct RegisterAgent<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
