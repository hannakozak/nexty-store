export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("en-UK", {
		style: "currency",
		currency: "GBP",
	}).format(amount);
};
