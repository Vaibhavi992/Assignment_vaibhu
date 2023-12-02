#include<stdio.h>
int main()
{
	int ndays, years,months,days;
	printf("Enter the days:");
	scanf("%d",&ndays);
	years=ndays/365;
	months=(ndays-years*365)/30;
	days=(ndays-years*365-months*30);
	printf("years=%d",years);
	printf("\nmonths=%d",months);
	printf("\ndays=%d",days);
	return 0;
}
